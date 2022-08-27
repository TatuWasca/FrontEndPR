import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

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
    this.modalService.dismissAll();
    this.formElement.reset();
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
    this.ProyectosService.añadirProy(this.NewProy).subscribe(data =>{
      this.proyectosArray = data;
      this.cerrar();
    })
  }
  borrar(id: number){
    this.ProyectosService.eliminarProy(id).subscribe(data =>{
      this.proyectosArray = data;
      this.cerrar();
    })

  }
  editar(id:number, proy:Proyectos){
    this.ProyectosService.editarProy(id, proy).subscribe(data =>{
      this.proyectosArray = data;
      this.cerrar();
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