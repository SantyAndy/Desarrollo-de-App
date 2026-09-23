import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StoreService, Product } from '../../services/store';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div style="padding: 40px; max-width: 600px; margin: auto;">
      <h2>Tu Carrito</h2>
      <ul style="list-style: none; padding: 0;">
        <li *ngFor="let item of items" style="border-bottom: 1px solid #ccc; padding: 10px 0;">
          {{ item.title }} - <strong>\${{ item.price }}</strong>
        </li>
      </ul>
      <h3 *ngIf="items.length === 0">El carrito está vacío</h3>

      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <a routerLink="/" style="padding: 10px; background: gray; color: white; text-decoration: none;">Seguir Comprando</a>
        <a *ngIf="items.length > 0" routerLink="/checkout" style="padding: 10px; background: blue; color: white; text-decoration: none;">Pagar</a>
      </div>
    </div>
  `
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  constructor(private storeService: StoreService) {}
  ngOnInit(): void { this.items = this.storeService.getCart(); }
}