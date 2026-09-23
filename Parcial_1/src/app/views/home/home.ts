import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { StoreService, Product } from '../../services/store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <header class="navbar">
      <h1>FakeStore Pro</h1>
      <a routerLink="/carrito">🛒 Carrito ({{ cartCount }})</a>
    </header>

    <div class="main-container">
      <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
        <label style="font-weight: 600;">Categoría:</label>
        <select class="form-control" style="max-width: 250px;" [(ngModel)]="selectedCategory" (change)="filterProducts()">
          <option value="">Todas las categorías</option>
          <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
        </select>
      </div>

      <!-- Indicador de carga si la API tarda -->
      <p *ngIf="products.length === 0" style="text-align: center; color: #64748b; font-size: 1.2rem; margin-top: 40px;">
        Cargando productos desde la API... ⏳
      </p>

      <div class="products-grid">
        <div *ngFor="let prod of filteredProducts" class="card">
          <img [src]="prod.image" [alt]="prod.title" />
          <h4>{{ prod.title }}</h4>
          <p class="price">\${{ prod.price }}</p>
          <a [routerLink]="['/producto', prod.id]" class="btn">Ver Producto</a>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = [];
  selectedCategory = '';
  cartCount = 0;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.cartCount = this.storeService.getCart().length;
    
    // Llamada HTTP asíncrona
    this.storeService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err) => console.error("Error al cargar productos:", err)
    });

    this.storeService.getCategories().subscribe({
      next: (data) => this.categories = data
    });
  }

  filterProducts(): void {
    this.filteredProducts = this.selectedCategory 
      ? this.products.filter(p => p.category === this.selectedCategory) 
      : this.products;
  }
}