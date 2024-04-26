import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from './_modelo/Productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url: string ='http://localhost:8080/productos';

  constructor(private http:HttpClient) {}

  obtenerTodos():Observable<Productos[]>{
    return this.http.get<Productos[]>(this.url);
  }

  darAlta(producto: Productos):Observable<Productos>{
    return this.http.post<Productos>(this.url, producto);
  }
}
