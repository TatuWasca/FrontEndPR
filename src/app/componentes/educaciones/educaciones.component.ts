import { Component, OnInit } from '@angular/core';
import { Educaciones } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  isLogged: boolean = false;
  educacionesArray: Educaciones[] 

  NewEdu: Educaciones = new Educaciones();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: false, backdrop: 'static'}) 
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
    this.obtenerEdu();
    this.modalService.dismissAll();
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
  onEditar(id:number,edu:Educaciones){
    if(this.formElement.valid){
      this.editar(id,edu); 
    }
    this.formElement.markAllAsTouched(); 
  }

  //Funciones CRUD
  crear(){
    this.educacionService.añadirEdu(this.NewEdu).subscribe(data =>{
      this.educacionesArray = data;
      this.cerrarCrear();
    })
  }
  borrar(id: number){
    this.educacionService.eliminarEdu(id).subscribe(data =>{
      this.educacionesArray = data;
      this.cerrar();
    })
  }
  editar(id:number, edu:Educaciones){
    this.educacionService.editarEdu(id, edu).subscribe(data =>{
      this.educacionesArray = data;
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

  constructor(public modalService:NgbModal,private tokenService: TokenService, private educacionService:EducacionService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerEdu();
  }
}