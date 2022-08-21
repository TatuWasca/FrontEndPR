import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/object-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos-service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './Proyectos.component.html',
  styleUrls: ['./Proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosArray: Proyectos[] 

  NewProy: Proyectos = new Proyectos();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.obtenerProy();
    this.modalService.dismissAll();
    this.formElement.reset();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }

  //Permite obtener los proyectos
  private obtenerProy(){
    this.ProyectosService.obtenerListaProy().subscribe(data =>{
      this.proyectosArray = data;
    })
  }

  //Comprueba que sea validos sus inputs al hacer submit y llama a la función CRUD correspondiente
  onCrear(){
    if(this.formElement.valid){
      this.crear();
      this.cerrar();
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }
  onBorrar(id: number){
    this.borrar(id);
    this.cerrar();
  }
  onEditar(id:number,proy:Proyectos){
    if(this.formElement.valid){
      this.editar(id,proy);
      this.cerrar(); 
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Funciones CRUD
  crear(){
    this.ProyectosService.añadirProy(this.NewProy).subscribe();
  }
  borrar(id: number){
    this.ProyectosService.eliminarProy(id).subscribe();
  }
  editar(id:number, proy:Proyectos){
    this.ProyectosService.editarProy(id, proy).subscribe();
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

  constructor(public modalService:NgbModal, private ProyectosService:ProyectosService) { }

  ngOnInit(): void {
    this.obtenerProy();
  }
}