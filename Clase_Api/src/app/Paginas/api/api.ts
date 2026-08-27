import { Component } from '@angular/core';
import { Data } from '../../service/data';
import { CommonModule } from '@angular/common';

@   Component({
  selector: 'app-api',
  imports: [CommonModule],
  templateUrl: './api.html',
  styleUrl: './api.css',
})
export class Api {
constructor(private data: Data) {}

personajes: any[] = [];

ngOnInit() {
  this.data.ObtenerPersonajes().subscribe((response: any) => {
    this.personajes = response.results;
  });
}}
