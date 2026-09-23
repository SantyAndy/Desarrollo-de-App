import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, RefresherCustomEvent } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone: false,
})
export class DataPage {
  query = '';
  segment = 'all';
  refreshLabel = 'Desliza para actualizar';
  visible = 5;
  readonly items = [
    'Angular',
    'Ionic',
    'TypeScript',
    'Capacitor',
    'Ionicons',
    'RxJS',
    'Web Components',
    'Vite',
    'ESLint',
    'Vitest',
    'Sass',
    'PWA',
  ];
  readonly savedItems = new Set(['Angular', 'Ionic', 'Capacitor', 'RxJS']);
  reorderItems = ['Planificar interfaz', 'Crear rutas', 'Probar interacción', 'Entregar proyecto'];

  get filtered(): string[] {
    const normalizedQuery = this.query.trim().toLowerCase();

    return this.items.filter((item) => {
      const matchesSegment = this.segment === 'all' || this.savedItems.has(item);
      const matchesQuery = item.toLowerCase().includes(normalizedQuery);
      return matchesSegment && matchesQuery;
    });
  }

  onSearch(event: CustomEvent<{ value?: string | null }>): void {
    this.query = event.detail.value ?? '';
    this.visible = 5;
  }

  onSegmentChange(): void {
    this.visible = 5;
  }

  loadMore(event: InfiniteScrollCustomEvent): void {
    this.visible = Math.min(this.visible + 3, this.filtered.length);
    setTimeout(() => event.target.complete(), 350);
  }

  refresh(event: RefresherCustomEvent): void {
    this.refreshLabel = `Actualizado: ${new Date().toLocaleTimeString()}`;
    setTimeout(() => event.target.complete(), 600);
  }

  reorder(event: CustomEvent<ItemReorderEventDetail>): void {
    this.reorderItems = event.detail.complete(this.reorderItems);
  }
}
