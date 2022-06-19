import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListadoComponent } from './categoria/listado/listado.component';
import { ActualizarCategoriaComponent } from './categoria/listado/actualizar-categoria/actualizar-categoria.component';
import { ProductosComponent } from './productos/productos.component';
import { ListadoPComponent } from './productos/listado-p/listado-p.component';
import { ActualizarProductoComponent } from './productos/listado-p/actualizar-producto/actualizar-producto.component';
import { BuscarProductoComponent } from './productos/listado-p/buscar-producto/buscar-producto.component';
import { BuscarCategoriaComponent } from './categoria/listado/buscar-categoria/buscar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriaComponent,
    BienvenidoComponent,
    ListadoComponent,
    ActualizarCategoriaComponent,
    ProductosComponent,
    ListadoPComponent,
    ActualizarProductoComponent,
    BuscarProductoComponent,
    BuscarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
