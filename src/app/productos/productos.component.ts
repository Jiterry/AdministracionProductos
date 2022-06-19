import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Producto } from '../modelo/producto';
import { ProductoService } from '../servicios/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  titulo : string = 'Productos';
  producto: Producto = new Producto();

  constructor(private servicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  almacenarProducto(producto: Producto): void{
    this.servicio.crearProducto(producto).subscribe(
      result => {
        Swal.fire(
          'Administración de Productos',
          'El producto se almacenó',
          'success'
          )
        this.router.navigate(["/listadoP"]);
      }
    );
  }
}
