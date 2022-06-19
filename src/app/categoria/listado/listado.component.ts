import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  titulo: string = "Listado de categorias";
  categoriaSearch: Categoria = new Categoria();
  listaDeCategorias: Categoria[] = [
    {
      idCategoria: 1,
      nombreCategoria: 'yo',
      descripcionCategoria: 'ya'
    },
    {
      idCategoria: 2,
      nombreCategoria: 'yo',
      descripcionCategoria: 'ya'
    }
  ];

  constructor(private servicio: CategoriaService, private router : Router) { }

  ngOnInit(): void {
    this.servicio.listadoCategorias().subscribe((categorias) => this.listaDeCategorias = categorias);
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
      this.router.navigate([`/categorias/search/${id}`])
    }
  }

  eliminar(categoria: Categoria): void {
    Swal.fire({
      title: 'Eliminar categoria?',
      text: `¿Estás seguro de eliminar la categoria ${categoria.nombreCategoria}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminalo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicio.eliminarCategoria(categoria.idCategoria).subscribe((respuesta) => {this.servicio.listadoCategorias().subscribe((categorias) => (this.listaDeCategorias = categorias))})
        Swal.fire(
          'Eliminado',
          'Tu archivo ha sido eliminado.',
          'success'
        )
      }
    })
  }
}
