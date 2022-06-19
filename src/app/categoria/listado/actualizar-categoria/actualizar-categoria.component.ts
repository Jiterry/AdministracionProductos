import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from 'src/app/modelo/categoria';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-actualizar-categoria',
  templateUrl: './actualizar-categoria.component.html',
  styleUrls: ['./actualizar-categoria.component.css']
})
export class ActualizarCategoriaComponent implements OnInit {

  titulo: string = "Actualizar categoria";
  categoria: Categoria = new Categoria();

  constructor(
    private servicio: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.leerCategoria(id).subscribe(
      data => {
        this.categoria = data
      }
    )
  }

  updateCategoria(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.servicio.actualizarCategoria(id, this.categoria).subscribe(
      result => {
        Swal.fire(
          'Administración de Productos',
          'La categoria se actualizó',
          'success'
          )
        this.router.navigate(["/listado"]);
      }
    )
  }

}
