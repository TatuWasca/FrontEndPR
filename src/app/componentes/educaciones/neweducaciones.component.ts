import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Educaciones } from 'src/app/model/component-models';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducaciones',
  templateUrl: './neweducaciones.component.html',
  styleUrls: ['./neweducaciones.component.css']
})
export class NeweducacionesComponent implements OnInit {
  NewEdu: Educaciones = new Educaciones();

  onCrear(): void{
    this.educacionService.añadirEdu(this.NewEdu).subscribe(data =>{
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

  constructor(private educacionService:EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

}
