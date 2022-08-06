import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionArray: educacion[] = [
    {id: 1, nombre: 'Instituto San Antonio', img: 'assets/images/usuario/logo-san-antonio.jpg', descripcion: 'Bachiller en Administración y Economía', lugar: 'Villa María, Córdoba', fecha: '2017 – 2022'},
    {id: 2, nombre: 'One World Academy', img: 'assets/images/usuario/logo-one-world-academy.jpg', descripcion: 'Aprendizaje de inglés', lugar: 'Villa María', fecha: '2017 – 2022' },
    {id: 3,nombre: 'Argentina Programa', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion: 'Aprendizaje de programación', lugar: 'Via online', fecha: '2021 – 2022' },
  ];
  selectedElement: educacion = new educacion();

  /*Funciones para la apertura, modificacion, adicion y eliminacion de elementos*/
  /*Abre el modal*/
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false, backdrop : 'static'}) 
  }
  /*Guarda el objeto actual*/
  ModOrBor(educacion:educacion){
    this.selectedElement = educacion;
  }
  /*Modifica o agrega un objeto*/ 
  addOrModify(content: any){
    /*Checkea si es el objeto existe al ver su id, comprueba que sea validos sus inputs*/
    if(this.selectedElement.id == 0 && this.formElement.valid){
      this.selectedElement.id = this.educacionArray.length + 1;
      this.educacionArray.push(this.selectedElement);

      this.modalService.dismissAll(content);
      this.selectedElement = new educacion();
      this.formElement.reset();
    }else if(this.formElement.valid){
      this.modalService.dismissAll(content);
      this.selectedElement = new educacion();
      this.formElement.reset();
    }
  }
  /*Borra un elemento*/
  borrar(contents:any){
    this.educacionArray = this.educacionArray.filter(x => x != this.selectedElement);
    this.modalService.dismissAll(contents);

    this.selectedElement = new educacion();
  }
  /*Resetea el formualrio*/
  Reset(content:any){
    this.modalService.dismissAll(content);
    this.selectedElement = new educacion();
    this.formElement.reset();
  }

  /*Funciones para los formularios*/
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    img: new FormControl(''),
    descripcion: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    lugar: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fecha: new FormControl('', [Validators.required, Validators.maxLength(50)]),
  });

  get Nombre(){
    return this.formElement.get("nombre");
  }
  get Img(){
   return this.formElement.get("img");
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

  /*Comprueba que sea validos sus inputs al hacer submit*/
  onEnviar(){
    this.formElement.markAllAsTouched(); 
  }
  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
