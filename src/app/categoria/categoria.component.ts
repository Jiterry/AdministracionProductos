import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Categoria } from '../modelo/categoria';
import { CategoriaService } from '../servicios/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  titulo : string = 'Categorias';
  categoria : Categoria = new Categoria();

  constructor(private servicio: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  almacenarCategoria(categoria: Categoria): void{
    this.servicio.crearCategoria(categoria).subscribe(
      result => {
        Swal.fire(
          'Administración de Productos',
          'La categoria se almacenó',
          'success'
          )
        this.router.navigate(["/listado"]);
      }
    );
  }

}
