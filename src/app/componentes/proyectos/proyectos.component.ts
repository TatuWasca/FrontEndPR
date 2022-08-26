import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/services/proyectos-service/proyectos.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './Proyectos.component.html',
  styleUrls: ['./Proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged: boolean = false;
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
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }
  onBorrar(id: number){
    this.borrar(id);
  }
  onEditar(id:number,proy:Proyectos){
    if(this.formElement.valid){
      this.editar(id,proy);
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Funciones CRUD
  crear(){
    this.ProyectosService.añadirProy(this.NewProy).subscribe();
    this.cerrar();
  }
  borrar(id: number){
    this.ProyectosService.eliminarProy(id).subscribe();
    this.cerrar();
  }
  editar(id:number, proy:Proyectos){
    this.ProyectosService.editarProy(id, proy).subscribe();
    this.cerrar();
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

  constructor(public modalService:NgbModal, private tokenService: TokenService, private ProyectosService:ProyectosService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerProy();
  }
}