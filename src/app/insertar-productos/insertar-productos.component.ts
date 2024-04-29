import { Component } from '@angular/core';
import { Productos } from '../_modelo/Productos';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-insertar-productos',
  standalone: true,
  imports: [],
  templateUrl: './insertar-productos.component.html',
  styleUrl: './insertar-productos.component.css'
})
export class InsertarProductosComponent {
  producto:Productos = {
    idProducto: 200,
    nombreProducto: 'prueba',
    precioUnitario: 10.5,
    unidadesStock: 10
  };

  constructor(private productoServicio:ProductosService){}

  darAlta() {
    this.productoServicio.darAlta(this.producto).subscribe();
  }
}
