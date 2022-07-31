import { Component, OnInit } from '@angular/core';
import { acercaDe } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acercaDeArray:  acercaDe[] = [
    {id: 1, descripcion: 'Me caracterizo por mi dinamismo, pro-actividad y entusiasmo. Tengo facilidad para trabajar tanto en equipo como de forma independiente, según las necesidades.  Busco desarrollarme profesionalmente y poder demostrar mi valía en la empresa.'}
  ];
  selectedElement: acercaDe = new acercaDe();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(acercaDe:acercaDe){
    this.selectedElement = acercaDe;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.acercaDeArray.length + 1;
      this.acercaDeArray.push(this.selectedElement)   
    }
    this.selectedElement = new acercaDe();
  }
  borrar(){
    this.acercaDeArray = this.acercaDeArray.filter(x => x != this.selectedElement);
    this.selectedElement = new acercaDe();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
