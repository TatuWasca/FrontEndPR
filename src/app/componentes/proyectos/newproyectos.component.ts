import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/component-models';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  NewProy: Proyectos = new Proyectos();

  onCrear(): void{
    this.proyectosService.añadirProy(this.NewProy).subscribe(data =>{
      alert("Elemento añadido correctamente")
      this.router.navigate(['']);
    }, err=>{
      alert("Ha ocurrido un error")
      this.router.navigate(['']);
    })
  }

  cancelar(){
    this.formElement.reset();
    this.router.navigate(['']);
  }
  
  //Funciones para los formularios
  formElement = new FormGroup({
    nombreF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    descripcionF: new FormControl('', [Validators.required, Validators.maxLength(200)]),
    lugarF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fechaF: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    urlF: new FormControl('', [Validators.required, Validators.maxLength(250)]),
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
  get UrlF(){
    return this.formElement.get("urlF");
  }
  
  constructor(private proyectosService:ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

}
