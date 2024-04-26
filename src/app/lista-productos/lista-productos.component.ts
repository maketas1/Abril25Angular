import { Component } from '@angular/core';
import { Productos } from '../_modelo/Productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Productos[] = [];
  constructor(private servicio:ProductosService){}

  ngOnInit(): void {
    this.servicio.obtenerTodos()
    .subscribe(data => this.productos = data);
  }
}
