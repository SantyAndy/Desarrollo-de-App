import { Component } from '@angular/core';

interface ShowcaseSection {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  readonly sections: ShowcaseSection[] = [
    {
      title: 'Componentes',
      description: 'Elementos visuales esenciales para construir interfaces claras.',
      route: '/components',
      icon: 'apps-outline',
    },
    {
      title: 'Formularios',
      description: 'Controles para capturar información de forma intuitiva.',
      route: '/forms',
      icon: 'create-outline',
    },
    {
      title: 'Feedback',
      description: 'Mensajes y estados que mantienen al usuario informado.',
      route: '/feedback',
      icon: 'chatbubble-ellipses-outline',
    },
    {
      title: 'Navegación',
      description: 'Patrones para desplazarse entre vistas y contenidos.',
      route: '/navigation',
      icon: 'navigate-outline',
    },
    {
      title: 'Datos',
      description: 'Listas, búsquedas y patrones para organizar información.',
      route: '/data',
      icon: 'list-outline',
    },
    {
      title: 'Multimedia',
      description: 'Recursos visuales para enriquecer la experiencia.',
      route: '/media',
      icon: 'images-outline',
    },
    {
      title: 'Overlays',
      description: 'Capas contextuales para acciones y detalles adicionales.',
      route: '/overlays',
      icon: 'layers-outline',
    },
    {
      title: 'Avanzados',
      description: 'Componentes para interacciones y acciones especializadas.',
      route: '/advanced',
      icon: 'rocket-outline',
    },
  ];

  get totalSections(): number {
    return this.sections.length + 1;
  }

  get categoryCount(): number {
    return this.sections.length;
  }
}