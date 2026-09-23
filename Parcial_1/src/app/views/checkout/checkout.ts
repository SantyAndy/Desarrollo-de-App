import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreService, Product } from '../../services/store';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="main-container" style="max-width: 500px;">
      <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h2 style="margin-bottom: 20px; color: #1e293b;">Finalizar Compra</h2>
        <form (ngSubmit)="finalizar()">
          <div class="form-group">
            <label>Nombre completo</label>
            <input class="form-control" type="text" [(ngModel)]="nombre" name="nombre" required />
          </div>
          <div class="form-group">
            <label>Dirección de envío</label>
            <input class="form-control" type="text" [(ngModel)]="direccion" name="direccion" required />
          </div>
          <div class="form-group">
            <label>Teléfono</label>
            <input class="form-control" type="tel" [(ngModel)]="telefono" name="telefono" required />
          </div>
          <div class="form-group">
            <label>Tarjeta de Crédito</label>
            <input class="form-control" type="text" [(ngModel)]="tarjeta" name="tarjeta" placeholder="XXXX-XXXX-XXXX-XXXX" required />
          </div>
          <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 10px; padding: 12px;">Pagar Ahora</button>
        </form>
      </div>
    </div>
  `
})
export class CheckoutComponent {
  nombre = ''; direccion = ''; telefono = ''; tarjeta = '';

  constructor(private storeService: StoreService, private router: Router) {}

  finalizar(): void {
    alert(`¡Pago procesado con éxito, ${this.nombre}! Tu pedido llegará pronto a ${this.direccion}.`);
    this.storeService.clearCart();
    this.router.navigate(['/']);
  }
}