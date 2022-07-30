import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/test';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaArray: experiencia[] = [
    {nombre: 'Argentina Programa', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion:'Curso de programación', lugar: 'Villa María, Córdoba', fecha:'2021 - 2022'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
