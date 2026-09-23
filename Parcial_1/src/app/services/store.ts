import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Product { id: number; title: string; price: number; description: string; category: string; image: string; }

@Injectable({ providedIn: 'root' })
export class StoreService {
  private apiUrl = 'https://fakestoreapi.com/products';
  private cart: Product[] = [];
  private cachedProducts: Product[] = [];   

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (this.cachedProducts.length > 0) {
      return of(this.cachedProducts);
    }
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap(data => this.cachedProducts = data) // Guarda los datos para la próxima vez
    );
  }

  getProductById(id: number): Observable<Product> {
    // Si ya tenemos los productos en caché, podemos buscarlo localmente para evitar otra petición lenta
    const found = this.cachedProducts.find(p => p.id === id);
    if (found) {
      return of(found);
    }
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }
  
  addToCart(product: Product): void { this.cart.push(product); }
  getCart(): Product[] { return this.cart; }
  clearCart(): void { this.cart = []; }
}