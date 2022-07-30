import { Component, OnInit } from '@angular/core';

import { idiomas } from 'src/app/models/test';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  idiomasArray: idiomas[] = [
    {nombre: 'Inglés', descripcion: 'Nivel A1', nivel: 10},
    {nombre: 'Español', descripcion: 'Lengua nativa', nivel: 10},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
