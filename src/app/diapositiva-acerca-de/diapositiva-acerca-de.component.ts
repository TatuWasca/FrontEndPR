import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapositiva-acerca-de',
  templateUrl: './diapositiva-acerca-de.component.html',
  styleUrls: ['./diapositiva-acerca-de.component.css']
})
export class DiapositivaAcercaDeComponent implements OnInit {
  descripcion!: string;

  constructor() { }

  modificar(){
    console.log(this.descripcion);
  }

  ngOnInit(): void {
  }

}
