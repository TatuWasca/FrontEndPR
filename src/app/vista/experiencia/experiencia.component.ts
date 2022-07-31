import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaArray: experiencia[] = [
    {id: 1, nombre: 'Argentina Programa', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion:'Curso de programación', lugar: 'Villa María, Córdoba', fecha:'2021 - 2022'}
  ]
  selectedElement: experiencia = new experiencia();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(experiencia:experiencia){
    this.selectedElement = experiencia;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.experienciaArray.length + 1;
      this.experienciaArray.push(this.selectedElement)   
    }
    this.selectedElement = new experiencia();
  }
  borrar(){
    this.experienciaArray = this.experienciaArray.filter(x => x != this.selectedElement);
    this.selectedElement = new experiencia();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}