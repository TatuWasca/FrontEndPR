import { Component, OnInit } from '@angular/core';
import { acercaDe } from 'src/app/models/test';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaDeArray:  acercaDe[] = [
    {descripcion: 'Me caracterizo por mi dinamismo, proactividad y entusiasmo. Tengo facilidad para trabajar tanto en equipo como de forma independiente, según las necesidades.  Busco desarrollarme profesionalmente y poder demostrar mi valía en la empresa.'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
