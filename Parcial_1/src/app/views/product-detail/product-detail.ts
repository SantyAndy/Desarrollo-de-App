import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService, Product } from '../../services/store';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="navbar">
      <h1>Detalle del Producto</h1>
      <a routerLink="/carrito">🛒 Ver Carrito</a>
    </header>

    <div class="main-container" style="display: flex; justify-content: center;">
      <div *ngIf="product; else cargando" style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.05); text-align: center;">
        <img [src]="product.image" style="height: 250px; object-fit: contain; margin-bottom: 20px;" />
        <h2 style="margin-bottom: 15px; font-size: 1.4rem;">{{ product.title }}</h2>
        <p style="color: #64748b; margin-bottom: 20px; line-height: 1.5;">{{ product.description }}</p>
        <h3 class="price" style="font-size: 1.5rem; margin-bottom: 20px;">\${{ product.price }}</h3>
        
        <div style="margin-top: 30px; display: flex; gap: 15px; justify-content: center;">
          <button class="btn btn-success" (click)="add()" style="padding: 12px 24px; font-size: 1rem; cursor: pointer;">
            🛒 Añadir al Carrito
          </button>
          <a routerLink="/" class="btn btn-secondary" style="padding: 12px 24px; font-size: 1rem; text-decoration: none;">
            Seguir Comprando
          </a>
        </div>
      </div>

      <ng-template #cargando>
        <p style="text-align: center; margin-top: 50px;">Cargando detalle del producto... ⏳</p>
      </ng-template>
    </div>
  `
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(private route: ActivatedRoute, private storeService: StoreService) {}

  ngOnInit(): void {
    // Escuchamos los cambios en los parámetros de la URL para que cargue al instante aunque cambies de producto
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.product = undefined; // Limpia momentáneamente para mostrar el estado de carga
        this.storeService.getProductById(id).subscribe({
          next: (data) => this.product = data,
          error: (err) => console.error("Error al obtener producto:", err)
        });
      }
    });
  }

  add(): void {
    if (this.product) {
      this.storeService.addToCart(this.product);
      alert('¡Producto agregado exitosamente al carrito!');
    }
  }
}