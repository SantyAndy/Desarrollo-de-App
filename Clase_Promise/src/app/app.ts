import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgFor], 
  templateUrl: './app.html'
})
export class App {
  nuevaTarea: string = '';
  tareas: string[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim() !== '') {
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(indice: number) {
    this.tareas.splice(indice, 1);
  }
}