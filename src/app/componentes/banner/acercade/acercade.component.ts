import { Component, OnDestroy, OnInit } from '@angular/core';
import { Acercade } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AcercadeService } from 'src/app/service/acercade.service';
import { TokenService } from 'src/app/service/token.service';

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
    this.modalService.dismissAll();
  }

  //Permite obtener el elemento acerca de
  private obtenerAcercaDe(){
    this.AcercadeService.obtenerListaAcDe().subscribe(data =>{
      this.AcercadeArray = data;
    })
  } 

  //Comprueba que sea validos sus inputs al hacer submit
  onEditar(id:number,AcDe:Acercade){
    if(this.formElement.valid){
      this.editar(id,AcDe); 
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //FunciÓn CRUD
  editar(id:number, AcDe:Acercade){
    this.AcercadeService.editarAcDe(id,AcDe).subscribe(data =>{
      this.AcercadeArray = data;
      this.cerrar();
    })
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    descripcionF: new FormControl('', [Validators.required, Validators.minLength(50), Validators.maxLength(250)]),
  });
  get DescripcionF(){
    return this.formElement.get("descripcionF");
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