import { Component, OnDestroy, OnInit } from '@angular/core';
import { Acercade } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcercadeService } from 'src/app/services/acercade-service/acercade.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercaDeComponent implements OnInit {
  isLogged: boolean = false;
  AcercadeArray: Acercade[]

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }

  //Resetea el formulario
  cerrar(){
    this.obtenerAcercaDe();
    this.modalService.dismissAll();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }

  //Permite obtener el elemento acerca de
  private obtenerAcercaDe(){
    this.AcercadeService.obtenerListaAcDe().subscribe(data =>{
      this.AcercadeArray = data;
    })
  } 

  //FunciÓn CRUD
  editar(id:number, AcDe:Acercade){
    this.AcercadeService.editarAcDe(id,AcDe).subscribe();
    this.cerrar();
  }

  //Comprueba que sea validos sus inputs al hacer submit
  onEditar(id:number,AcDe:Acercade){
    if(this.formElement.valid){
      this.editar(id,AcDe); 
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    descripcion: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(250)]),
  });
  get Descripcion(){
    return this.formElement.get("descripcion");
  }

  constructor(public modalService:NgbModal, private tokenService: TokenService, private AcercadeService:AcercadeService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerAcercaDe();
  };
}