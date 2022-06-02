import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapositivas-informacion',
  templateUrl: './diapositivas-informacion.component.html',
  styleUrls: ['./diapositivas-informacion.component.css']
})
export class DiapositivasInformacionComponent implements OnInit {
  nombre!: string;
  imagen!: string;
  descripcion!: string;
  fecha!: string;
  lugar!: string;
  

  constructor() { }

  crear(){
    console.log(this.imagen, this.nombre, this.descripcion, this.fecha, this.lugar);
  }

  ngOnInit(): void {
  }

}
