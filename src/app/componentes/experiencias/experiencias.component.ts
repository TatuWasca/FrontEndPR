import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/experiencias.service';
import { TokenService } from 'src/app/service/token.service';

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
    this.modalService.open(contenido, {centered: true, animation: false, backdrop: 'static'}) 
    setTimeout(() => { document.getElementById("aceptar")!.focus() }, 50) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.modalService.dismissAll();
  }
  cerrarCrear(){
    this.formElement.reset();
    this.modalService.dismissAll();
  }
  cerrarEditar(){
    this.obtenerExp();
    this.modalService.dismissAll();
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
  onEditar(id:number,exp:Experiencias){
    if(this.formElement.valid){
      this.editar(id,exp);
    }else{
      this.formElement.markAllAsTouched(); 
    }
  } 

  //Funciones CRUD
  crear(){
    this.experienciaService.añadirExp(this.NewExp).subscribe(data =>{
      this.experienciasArray = data;
      this.cerrarCrear();
    })

  }
  borrar(id: number){
    this.experienciaService.eliminarExp(id).subscribe(data =>{
      this.experienciasArray = data;
      this.cerrar();
    })
  }
  editar(id:number, exp:Experiencias){
    this.experienciaService.editarExp(id, exp).subscribe(data =>{
      this.experienciasArray = data;
      this.cerrarEditar();
    })
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombreF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcionF: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lugarF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fechaF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get NombreF(){
    return this.formElement.get("nombreF");
  }
  get DescripcionF(){
    return this.formElement.get("descripcionF");
  }
  get LugarF(){
   return this.formElement.get("lugarF");
  }
  get FechaF(){
    return this.formElement.get("fechaF");
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