import { Component, computed, inject, signal } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
  ToastController,
  ToggleCustomEvent,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, flashOffOutline, sparkles, trashOutline } from 'ionicons/icons';

import { UserPhoto } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.page.html',
  styleUrls: ['gallery.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon,
    IonCard,
    IonButton,
    IonItem,
    IonLabel,
    IonToggle,
  ],
})
export class GalleryPage {
  protected readonly photoService = inject(PhotoService);
  private readonly toastController = inject(ToastController);

  /** Modo de captura seleccionado con el ion-toggle. */
  readonly isHighDef = signal<boolean>(false);

  readonly modeTitle = computed(() =>
    this.isHighDef() ? 'Modo Alta Definición' : 'Modo Ahorro de Datos',
  );
  readonly modeDescription = computed(() =>
    this.isHighDef() ? 'Calidad 95% • Mayor detalle' : 'Calidad 60% • Carga rápida',
  );
  readonly modeIcon = computed(() => (this.isHighDef() ? 'sparkles' : 'flash-off-outline'));

  constructor() {
    addIcons({ camera, trashOutline, sparkles, flashOffOutline });
  }

  onModeChange(event: ToggleCustomEvent): void {
    this.isHighDef.set(event.detail.checked);
  }

  async takePhoto(): Promise<void> {
    const result = await this.photoService.takeNewPhoto(this.isHighDef());
    if (result.success) {
      return;
    }

    switch (result.reason) {
      case 'cancelled':
        // El usuario cerró la cámara o la galería: no es un error.
        return;
      case 'permission_denied':
        await this.showToast(
          'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
          'danger',
        );
        return;
      case 'error':
        console.error('Error al capturar la fotografía:', result.message);
        await this.showToast('No fue posible obtener la fotografía. Inténtelo nuevamente.', 'warning');
        return;
    }
  }

  deletePhoto(photo: UserPhoto): void {
    this.photoService.deletePhoto(photo);
  }

  private async showToast(message: string, color: 'danger' | 'warning'): Promise<void> {
    const toast = await this.toastController.create({
      message,
      duration: 3500,
      position: 'bottom',
      positionAnchor: 'capture-fab',
      color,
      buttons: [{ text: 'Entendido', role: 'cancel' }],
    });
    await toast.present();
  }
}
