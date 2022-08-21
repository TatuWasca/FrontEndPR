import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/models/object-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/services/banner-service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerArray: Banner[] 

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.obtenerBanner();
    this.modalService.dismissAll();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }

  //Permite obtener el banner
  private obtenerBanner(){
    this.BannerService.obtenerListaBan().subscribe(data =>{
      this.bannerArray = data;
    })
  } 

  //Función CRUD
  editar(id:number, ban:Banner){
    this.BannerService.editarBan(id, ban).subscribe();
  }

  //Comprueba que sea validos sus inputs al hacer submit
  onEditar(id:number,ban:Banner){
    if(this.formElement.valid){
      this.editar(id,ban); 
      this.cerrar();
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    localidad: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });
  get Nombre(){
    return this.formElement.get("nombre");
  }
  get Descripcion(){
    return this.formElement.get("descripcion");
  }
  get Localidad(){
   return this.formElement.get("localidad");
  }
  
  constructor(public modalService:NgbModal, private BannerService:BannerService) { }

  ngOnInit(): void {
    this.obtenerBanner();
  }
}