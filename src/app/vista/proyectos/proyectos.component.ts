import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/models/test';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosArray: proyectos[] = [    
    {nombre: 'Aplicación con información profesional', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion:'Aplicación realizada en el curso Argentina Programa en donde se detalla información profesional propia', lugar: 'Villa María, Córdoba', fecha:'2021 - 2022'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
