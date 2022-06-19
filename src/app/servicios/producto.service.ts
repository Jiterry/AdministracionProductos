import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private endPoint : string = "https://spring-inventario-4am1.herokuapp.com/apiProductos/producto"
  private endPoint1 : string = "https://spring-inventario-4am1.herokuapp.com/apiProductos/producto/search"
  constructor(private http: HttpClient) { }
  private httpHeaders = new HttpHeaders({'ContentType':'application/json'})

  listadoProductos(): Observable<Producto[]>{
    return this.http.get(this.endPoint).pipe(map ((response) => response as Producto[]));
  }

  eliminarProducto(id: number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.endPoint}/${id}`, {headers: this.httpHeaders});
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.endPoint, producto, {headers: this.httpHeaders});
  }

  leerProducto(id : number) : Observable<Producto> {
    return this.http.get<Producto>(`${this.endPoint1}/${id}`, {headers:this.httpHeaders});
  }

  actualizarProducto(id: number, producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.endPoint}/${id}`, producto, {headers: this.httpHeaders})
  }
}
