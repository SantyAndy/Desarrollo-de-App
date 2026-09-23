import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home';
import { ProductDetailComponent } from './views/product-detail/product-detail';
import { CartComponent } from './views/cart/cart';
import { CheckoutComponent } from './views/checkout/checkout';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '' }
];