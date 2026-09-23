import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  readonly menuItems: MenuItem[] = [
    { title: 'Inicio', url: '/home', icon: 'home-outline' },
    { title: 'Componentes', url: '/components', icon: 'apps-outline' },
    { title: 'Formularios', url: '/forms', icon: 'create-outline' },
    { title: 'Feedback', url: '/feedback', icon: 'chatbubble-ellipses-outline' },
    { title: 'Navegación', url: '/navigation', icon: 'navigate-outline' },
    { title: 'Datos', url: '/data', icon: 'list-outline' },
    { title: 'Multimedia', url: '/media', icon: 'images-outline' },
    { title: 'Overlays', url: '/overlays', icon: 'layers-outline' },
    { title: 'Avanzados', url: '/advanced', icon: 'rocket-outline' },
  ];
}
