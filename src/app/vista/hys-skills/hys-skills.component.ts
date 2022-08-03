import { Component, OnInit } from '@angular/core';
import { HyS_Skills } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HySSkillsComponent implements OnInit {
  HyS_SkillsArray: HyS_Skills[] = [
    {id: 1, nombre: 'Mentalidad de Crecimiento', valor: 100},
    {id: 2, nombre: 'Capacidad de Organización', valor: 80},
    {id: 3, nombre: 'Multitareas', valor: 90},
    {id: 4,nombre: 'Aprendizaje continuo', valor: 80},
    {id: 5,nombre: 'Proactividad', valor: 70},
  ];
  selectedElement: HyS_Skills = new HyS_Skills();

  /*Funciones para la apertura, modificacion, adicion y eliminacion de elementos*/
  /*Abre el modal*/
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false, backdrop : 'static'}) 
  }
  /*Guarda el objeto actual*/
  ModOrBor(HyS_Skills:HyS_Skills){
    this.selectedElement = HyS_Skills;
  }
  /*Modifica o agrega un objeto*/ 
  addOrModify(content: any){
    /*Checkea si es el objeto existe al ver su id, comprueba que sea validos sus inputs*/
    if(this.selectedElement.id == 0 && this.formElement.valid){
      this.selectedElement.id = this.HyS_SkillsArray.length + 1;
      this.HyS_SkillsArray.push(this.selectedElement);

      this.modalService.dismissAll(content);
      this.selectedElement = new HyS_Skills();
      this.formElement.reset();
    }else if(this.formElement.valid){
      this.modalService.dismissAll(content);
      this.selectedElement = new HyS_Skills();
      this.formElement.reset();
    }
  }
  /*Borra un elemento*/
  borrar(contents:any){
    this.HyS_SkillsArray = this.HyS_SkillsArray.filter(x => x != this.selectedElement);
    this.modalService.dismissAll(contents);

    this.selectedElement = new HyS_Skills();
  }
  /*Resetea el formualrio*/
  Reset(content:any){
    this.modalService.dismissAll(content);
    this.selectedElement = new HyS_Skills();
    this.formElement.reset();
  }

  /*Funciones para los formularios*/
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    valor: new FormControl('', [Validators.required]),
  });

  get Nombre(){
    return this.formElement.get("nombre");
  }
  get Valor(){
   return this.formElement.get("valor");
  }

  /*Comprueba que sea validos sus inputs al hacer submit*/
  onEnviar(){
    this.formElement.markAllAsTouched(); 
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
