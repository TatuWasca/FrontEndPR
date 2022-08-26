import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/services/experiencias-service/experiencias.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  isLogged: boolean = false;
  experienciasArray: Experiencias[] 

  NewExp: Experiencias = new Experiencias();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.obtenerExp();
    this.modalService.dismissAll();
    this.formElement.reset();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }

  //Permite obtener las Experiencias
  private obtenerExp(){
    this.experienciaService.obtenerListaExp().subscribe(data =>{
      this.experienciasArray = data;
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
  onEditar(id:number,exp:Experiencias){
    if(this.formElement.valid){
      this.editar(id,exp);
    }else{
      this.formElement.markAllAsTouched(); 
    }
  } 

  //Funciones CRUD
  crear(){
    this.experienciaService.añadirExp(this.NewExp).subscribe();
    this.cerrar();
  }
  borrar(id: number){
    this.experienciaService.eliminarExp(id).subscribe();
    this.cerrar();
  }
  editar(id:number, exp:Experiencias){
    this.experienciaService.editarExp(id, exp).subscribe();
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
  
  constructor(public modalService:NgbModal, private tokenService: TokenService, private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerExp();
  }
}