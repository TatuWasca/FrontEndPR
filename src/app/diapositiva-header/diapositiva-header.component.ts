import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diapositiva-header',
  templateUrl: './diapositiva-header.component.html',
  styleUrls: ['./diapositiva-header.component.css']
})
export class DiapositivaHeaderComponent implements OnInit {
  banner!: string;
  perfil!: string;
  nombre!: string;
  descripcion!: string;
  localidad!: string;

  
  constructor() { }

  modificar(){
    console.log(this.banner, this.perfil, this.nombre, this.descripcion, this.localidad);
  }

  ngOnInit(): void {
  }

}
