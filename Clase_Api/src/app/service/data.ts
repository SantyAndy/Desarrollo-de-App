import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {

  constructor(private http: HttpClient) { }

  urlBase = 'https://rickandmortyapi.com/api/character';

  ObtenerPersonajes() {
    return this.http.get(this.urlBase);
  }
}
