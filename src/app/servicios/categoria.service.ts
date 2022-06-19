import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Categoria } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private endPoint : string = 'https://spring-inventario-4am1.herokuapp.com/apiCategorias/categoria';
  private endPoint1 : string = 'https://spring-inventario-4am1.herokuapp.com/apiCategorias/categoria/search';
  constructor(private http : HttpClient) { }
  private httpHeaders = new HttpHeaders({'ContentType':'application/json'});

  listadoCategorias(): Observable<Categoria[]>{

    return this.http.get(this.endPoint).pipe(map ((response) => response as Categoria[]));
  }

  eliminarCategoria(id : number) : Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.endPoint}/${id}`, {headers:this.httpHeaders});
  } 

  leerCategoria(id : number) : Observable<Categoria> {
    return this.http.get<Categoria>(`${this.endPoint1}/${id}`, {headers:this.httpHeaders});
  }

  crearCategoria(categoria : Categoria) : Observable<Categoria> {
    return this.http.post<Categoria>(this.endPoint, categoria, {headers : this.httpHeaders});
  }

  actualizarCategoria(id: number, categoria : Categoria) : Observable<Categoria> {
    return this.http.put<Categoria>(`${this.endPoint}/${id}`, categoria, {headers : this.httpHeaders});
  }
}
