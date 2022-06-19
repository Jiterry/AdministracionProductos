import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ActualizarCategoriaComponent } from './categoria/listado/actualizar-categoria/actualizar-categoria.component';
import { BuscarCategoriaComponent } from './categoria/listado/buscar-categoria/buscar-categoria.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ActualizarProductoComponent } from './productos/listado-p/actualizar-producto/actualizar-producto.component';
import { BuscarProductoComponent } from './productos/listado-p/buscar-producto/buscar-producto.component';
import { ListadoPComponent } from './productos/listado-p/listado-p.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path:'', component:BienvenidoComponent},
  {path:'listado', component:ListadoComponent},
  {path:'categorias', component:CategoriaComponent},
  {path:'categorias/:id', component:ActualizarCategoriaComponent},
  {path:'categorias/search/:id', component:BuscarCategoriaComponent},
  {path:'listadoP', component:ListadoPComponent},
  {path:'productos', component:ProductosComponent},
  {path:'productos/:id', component:ActualizarProductoComponent},
  {path:'productos/search/:id', component:BuscarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
