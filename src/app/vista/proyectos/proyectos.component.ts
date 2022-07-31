import { Component, OnInit } from '@angular/core';
import { proyectos } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosArray: proyectos[] = [    
    {id: 1, nombre: 'Aplicación con información profesional', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion:'Aplicación realizada en el curso Argentina Programa en donde se detalla información profesional propia', lugar: 'Villa María, Córdoba', fecha:'2021 - 2022'}
  ]
  selectedElement: proyectos = new proyectos();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(proyectos:proyectos){
    this.selectedElement = proyectos;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.proyectosArray.length + 1;
      this.proyectosArray.push(this.selectedElement)   
    }
    this.selectedElement = new proyectos();
  }
  borrar(){
    this.proyectosArray = this.proyectosArray.filter(x => x != this.selectedElement);
    this.selectedElement = new proyectos();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
