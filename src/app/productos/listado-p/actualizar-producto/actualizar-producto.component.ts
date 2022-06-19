import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  titulo: string = "Actualizar Producto";
  producto: Producto = new Producto();

  constructor(private servicio: ProductoService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.leerProducto(id).subscribe(
      data => {
        this.producto = data
      }
    )
  }

  updateProducto(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.actualizarProducto(id, this.producto).subscribe(
      result => {
        Swal.fire(
          'Administración de Productos',
          'La categoria se actualizó',
          'success'
          )
        this.router.navigate(["/listadoP"]);
      }
    )
  }

}
