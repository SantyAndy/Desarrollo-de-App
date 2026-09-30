/**
 * Fotografía registrada en la bitácora.
 * Se guarda la referencia (URI) y nunca el contenido Base64.
 */
export interface UserPhoto {
  /** Identificador único / ruta del archivo en el dispositivo. */
  filepath: string;
  /** URL lista para renderizar en <ion-img> (capturedPhoto.webPath). */
  webPath?: string;
  /** Formato de la imagen (jpeg, png, ...). */
  format: string;
}

/** Parámetros de captura derivados del modo seleccionado. */
export interface CaptureSettings {
  quality: number;
  width: number;
}

/** Motivos por los que una captura puede no completarse. */
export type CaptureFailureReason = 'cancelled' | 'permission_denied' | 'error';

/**
 * Resultado tipado de una captura. El servicio nunca lanza excepciones
 * hacia la vista: siempre devuelve uno de estos dos casos.
 */
export type PhotoCaptureResult =
  | { success: true; photo: UserPhoto }
  | { success: false; reason: CaptureFailureReason; message?: string };
