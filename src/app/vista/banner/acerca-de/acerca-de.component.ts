import { Component, OnInit } from '@angular/core';
import { acercaDe } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  /*Funciones para la apertura, modificacion, adicion y eliminacion de elementos*/
  /*Abre el modal*/
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false, backdrop : 'static'}) 
  }
  /*Guarda el objeto actual*/
  ModOrBor(acercaDe:acercaDe){
    this.selectedElement = acercaDe;
  }
  /*Modifica o agrega un objeto*/ 
  addOrModify(content: any){
    /*Comprueba que sea validos sus inputs*/
    if(this.formElement.valid){
      this.modalService.dismissAll(content);
      this.selectedElement = new acercaDe();
      this.formElement.reset();
    }
  }
  /*Resetea el formualrio*/
  Reset(content:any){
    this.modalService.dismissAll(content);
    this.selectedElement = new acercaDe();
    this.formElement.reset();
  }

  /*Funciones para los formularios*/
  formElement = new FormGroup({
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(250)]),
  });

  get Descripcion(){
    return this.formElement.get("descripcion");
  }

  /*Comprueba que sea validos sus inputs al hacer submit*/
  onEnviar(){
    this.formElement.markAllAsTouched(); 
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
