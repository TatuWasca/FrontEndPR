import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerArray: banner[] = [
    {id: 1, nombre: 'Pablo Rubiolo', imgbanner: 'assets/images/usuario/banner.jpg', imgperfil: 'assets/images/usuario/icono-perfil.jpg', descripcion: 'Estudiante de secundaria', lugar:'Villa María, Córdoba'}
  ];
  selectedElement: banner = new banner();

  /*Funciones para la apertura, modificacion, adicion y eliminacion de elementos*/
  /*Abre el modal*/
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false, backdrop : 'static'}) 
  }
  /*Guarda el objeto actual*/
  ModOrBor(banner:banner){
    this.selectedElement = banner;
  }
  /*Modifica o agrega un objeto*/ 
  addOrModify(content: any){
    /*Comprueba que sean validos sus inputs*/
    if(this.formElement.valid){
      this.modalService.dismissAll(content);
      this.selectedElement = new banner();
      this.formElement.reset();
    }
  }
  /*Resetea el formualrio*/
  Reset(content:any){
    this.modalService.dismissAll(content);
    this.selectedElement = new banner();
    this.formElement.reset();
  }

  /*Funciones para los formularios*/
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    imgbanner: new FormControl(''),
    imgperfil: new FormControl(''),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    lugar: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  get Nombre(){
    return this.formElement.get("nombre");
  }
  get ImgBanner(){
   return this.formElement.get("imgbanner");
  }
  get ImgPerfil(){
    return this.formElement.get("imgperfil");
   }
  get Descripcion(){
    return this.formElement.get("descripcion");
  }
  get Lugar(){
   return this.formElement.get("lugar");
  }

  /*Comprueba que sea validos sus inputs al hacer submit*/
  onEnviar(){
    this.formElement.markAllAsTouched(); 
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
