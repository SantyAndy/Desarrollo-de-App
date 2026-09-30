import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {
  Camera,
  CameraPermissionState,
  CameraResultType,
  CameraSource,
  PermissionStatus,
} from '@capacitor/camera';

import {
  CaptureFailureReason,
  CaptureSettings,
  PhotoCaptureResult,
  UserPhoto,
} from '../models/photo.model';

/** Modo Alta Definición: mayor detalle. */
const HIGH_DEFINITION: CaptureSettings = { quality: 95, width: 1920 };
/** Modo Ahorro de Datos: carga rápida. */
const DATA_SAVER: CaptureSettings = { quality: 60, width: 800 };

@Injectable({ providedIn: 'root' })
export class PhotoService {
  /** Estado privado: solo el servicio puede modificarlo. */
  private readonly photosSignal = signal<UserPhoto[]>([]);
  private readonly capturingSignal = signal<boolean>(false);

  /** Vistas de solo lectura para los componentes. */
  public readonly photos = this.photosSignal.asReadonly();
  public readonly isCapturing = this.capturingSignal.asReadonly();

  /** Traduce el modo elegido en la vista a parámetros de captura. */
  getCaptureSettings(isHighDef: boolean): CaptureSettings {
    return isHighDef ? HIGH_DEFINITION : DATA_SAVER;
  }

  /**
   * Abre el selector nativo (Tomar fotografía / Elegir de la galería)
   * con la calidad y resolución correspondientes al modo recibido.
   */
  async takeNewPhoto(isHighDef: boolean): Promise<PhotoCaptureResult> {
    if (this.capturingSignal()) {
      return { success: false, reason: 'cancelled' };
    }
    this.capturingSignal.set(true);

    try {
      const hasPermission = await this.ensurePermissions();
      if (!hasPermission) {
        return { success: false, reason: 'permission_denied' };
      }

      const settings = this.getCaptureSettings(isHighDef);
      const { quality, width } = settings;

      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        allowEditing: false,
        quality,
        width,
        promptLabelHeader: 'Nueva evidencia',
        promptLabelPicture: 'Tomar Fotografía',
        promptLabelPhoto: 'Elegir de la Galería',
        promptLabelCancel: 'Cancelar',
      });

      if (!capturedPhoto.webPath) {
        return { success: false, reason: 'error', message: 'La imagen no devolvió una ruta válida.' };
      }

      const photo: UserPhoto = {
        filepath: capturedPhoto.path ?? `evidencia-${Date.now()}.${capturedPhoto.format}`,
        webPath: capturedPhoto.webPath,
        format: capturedPhoto.format,
      };

      if (Capacitor.getPlatform() === 'web') {
        await this.applyWebLimits(photo, settings);
      }

      this.photosSignal.update((photos) => [photo, ...photos]);
      return { success: true, photo };
    } catch (error: unknown) {
      const reason = this.classifyError(error);
      return { success: false, reason, message: this.errorMessage(error) };
    } finally {
      this.capturingSignal.set(false);
    }
  }

  /** Elimina una fotografía de la bitácora y libera su URL temporal. */
  deletePhoto(photo: UserPhoto): void {
    this.photosSignal.update((photos) => photos.filter((p) => p.filepath !== photo.filepath));
    if (photo.webPath?.startsWith('blob:')) {
      URL.revokeObjectURL(photo.webPath);
    }
  }

  /**
   * En Android/iOS el plugin aplica quality y width de forma nativa, pero su
   * implementación web los ignora. Aquí se aplican los mismos límites con un
   * canvas y se genera una nueva URL blob (nunca Base64).
   */
  private async applyWebLimits(photo: UserPhoto, { quality, width }: CaptureSettings): Promise<void> {
    const originalUrl = photo.webPath;
    if (!originalUrl) {
      return;
    }

    const bitmap = await createImageBitmap(await (await fetch(originalUrl)).blob());
    const scale = Math.min(1, width / bitmap.width);
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', quality / 100),
    );
    if (!blob) {
      return; // Se conserva la imagen original.
    }

    photo.webPath = URL.createObjectURL(blob);
    photo.format = 'jpeg';
    URL.revokeObjectURL(originalUrl);
  }

  /**
   * Verifica (y solicita si hace falta) los permisos de cámara y galería.
   * Ambos son necesarios porque CameraSource.Prompt ofrece los dos orígenes.
   */
  private async ensurePermissions(): Promise<boolean> {
    if (Capacitor.getPlatform() === 'web') {
      // En navegador no existe requestPermissions: el propio navegador pregunta.
      // Solo se bloquea si el usuario ya denegó la cámara explícitamente.
      try {
        const status = await Camera.checkPermissions();
        return status.camera !== 'denied';
      } catch {
        return true; // Permissions API no disponible en este navegador.
      }
    }

    let status: PermissionStatus = await Camera.checkPermissions();
    if (this.needsRequest(status.camera) || this.needsRequest(status.photos)) {
      status = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
    }
    return this.isGranted(status.camera) && this.isGranted(status.photos);
  }

  private needsRequest(state: CameraPermissionState): boolean {
    return state === 'prompt' || state === 'prompt-with-rationale';
  }

  private isGranted(state: CameraPermissionState): boolean {
    return state === 'granted' || state === 'limited';
  }

  /** Distingue cancelación del usuario, permisos denegados y fallos reales. */
  private classifyError(error: unknown): CaptureFailureReason {
    const message = this.errorMessage(error).toLowerCase();
    if (message.includes('cancel')) {
      return 'cancelled'; // "User cancelled photos app", botón atrás, etc.
    }
    if (message.includes('denied') || message.includes('permission')) {
      return 'permission_denied'; // "User denied access to camera/photos"
    }
    return 'error';
  }

  private errorMessage(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === 'string') {
      return error;
    }
    return 'Error desconocido';
  }
}
