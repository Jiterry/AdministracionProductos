import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-p',
  templateUrl: './listado-p.component.html',
  styleUrls: ['./listado-p.component.css']
})
export class ListadoPComponent implements OnInit {
  productoSearch: Producto = new Producto();
  titulo: string = "Listado de Productos"
  listaDeProductos: Producto[] = [
    {
      idProducto: 1,
      nombreProducto: 'Hola',
      descripcionProducto: 'ya',
      existencia: 2,
      precioProducto: 50,
      idCategoria: {
        idCategoria: 2
      },
      fechaCreacion: new Date("2022-02-16")
    }
  ];

  constructor(private servicio: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.servicio.listadoProductos().subscribe((productos) => this.listaDeProductos = productos);
  }

  async buscar(): Promise<void>{
    const { value: id } = await Swal.fire({
      icon: 'info',
      title: 'Ingresa ID a buscar',
      html:
        '<input id="swal-input1" class="swal2-input">',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar',
      focusConfirm: false,
      preConfirm: () => {
        return (Number)((<HTMLInputElement>document.getElementById('swal-input1')).value);
      }
    })
    if (id) {
      this.router.navigate([`/productos/search/${id}`])
    }
  }

  eliminar(producto: Producto): void{
    Swal.fire({
      title: 'Eliminar producto?',
      text: `¿Estás seguro de eliminar el producto ${producto.nombreProducto}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarProducto(producto.idProducto).subscribe((respuesta) => {this.servicio.listadoProductos().subscribe((productos) => (this.listaDeProductos = productos))})
        Swal.fire(
          'Eliminado',
          'Tu producto ha sido eliminado.',
          'success'
        )
      }
    })
  }

}
