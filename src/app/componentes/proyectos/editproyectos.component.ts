import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/model/component-models';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrls: ['./editproyectos.component.css']
})
export class EditproyectosComponent implements OnInit {
  proyectos:Proyectos;

  onEditar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosService.editarProy(id, this.proyectos).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
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

  constructor(private proyectosService:ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.proyectosService.obtenerDetalles(id).subscribe(data=>{
      this.proyectos= data;
    },err=>{
      alert("Ha ocurrido un error");
      this.router.navigate(['']);
    })
  }

}