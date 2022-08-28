import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLogged: boolean = false;
  bannerArray: Banner[] 

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: false, backdrop: 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.modalService.dismissAll();
  }
  cerrarEditar(){
    this.obtenerBanner();
    this.modalService.dismissAll();
  }

  //Permite obtener el banner
  private obtenerBanner(){
    this.BannerService.obtenerListaBan().subscribe(data =>{
      this.bannerArray = data;
    })
  } 

  //Comprueba que sea validos sus inputs al hacer submit
  onEditar(id:number,ban:Banner){
    if(this.formElement.valid){
      this.editar(id,ban); 
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Función CRUD
  editar(id:number, ban:Banner){
    this.BannerService.editarBan(id, ban).subscribe(data =>{
      this.bannerArray = data;
      this.cerrarEditar();
    })
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombreF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    descripcionF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    localidadF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
  });
  get NombreF(){
    return this.formElement.get("nombreF");
  }
  get DescripcionF(){
    return this.formElement.get("descripcionF");
  }
  get LocalidadF(){
   return this.formElement.get("localidadF");
  }
  
  constructor(public modalService:NgbModal,private tokenService: TokenService, private BannerService:BannerService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerBanner();
  }
}