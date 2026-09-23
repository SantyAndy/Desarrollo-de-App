import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule) },
  { path: 'components', loadChildren: () => import('./pages/components/components.module').then((m) => m.ComponentsPageModule) },
  { path: 'forms', loadChildren: () => import('./pages/forms/forms.module').then((m) => m.FormsPageModule) },
  { path: 'feedback', loadChildren: () => import('./pages/feedback/feedback.module').then((m) => m.FeedbackPageModule) },
  { path: 'navigation', loadChildren: () => import('./pages/navigation/navigation.module').then((m) => m.NavigationPageModule) },
  { path: 'data', loadChildren: () => import('./pages/data/data.module').then((m) => m.DataPageModule) },
  { path: 'media', loadChildren: () => import('./pages/media/media.module').then((m) => m.MediaPageModule) },
  { path: 'overlays', loadChildren: () => import('./pages/overlays/overlays.module').then((m) => m.OverlaysPageModule) },
  { path: 'advanced', loadChildren: () => import('./pages/advanced/advanced.module').then((m) => m.AdvancedPageModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}