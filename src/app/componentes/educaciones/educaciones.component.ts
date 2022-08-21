import { Component, OnInit } from '@angular/core';
import { Educaciones } from 'src/app/models/object-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/services/educacion-service/educacion.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  educacionesArray: Educaciones[] 

  NewEdu: Educaciones = new Educaciones();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false, backdrop : 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.obtenerEdu();
    this.modalService.dismissAll();
    this.formElement.reset();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }

  //Permite obtener las educaciones
  private obtenerEdu(){
    this.educacionService.obtenerListaEdu().subscribe(data =>{
      this.educacionesArray = data;
    })
  }

  //Comprueba que sea validos sus inputs al hacer submit y llama a la función CRUD correspondiente
  onCrear(){
    if(this.formElement.valid){
      this.crear();
    }
    this.formElement.markAllAsTouched(); 
  }
  onBorrar(id: number){
    this.borrar(id);
  }
  onEditar(id:number,edu:Educaciones){
    if(this.formElement.valid){
      this.editar(id,edu); 
    }
    this.formElement.markAllAsTouched(); 
  }

  //Funciones CRUD
  crear(){
    this.educacionService.añadirEdu(this.NewEdu).subscribe();
  }
  borrar(id: number){
    this.educacionService.eliminarEdu(id).subscribe();
  }
  editar(id:number, edu:Educaciones){
    this.educacionService.editarEdu(id, edu).subscribe();
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lugar: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fecha: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get Nombre(){
    return this.formElement.get("nombre");
  }
  get Descripcion(){
    return this.formElement.get("descripcion");
  }
  get Lugar(){
   return this.formElement.get("lugar");
  }
  get Fecha(){
    return this.formElement.get("fecha");
  }

  constructor(public modalService:NgbModal, private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.obtenerEdu();
  }
}