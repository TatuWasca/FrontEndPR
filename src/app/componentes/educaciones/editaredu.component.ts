import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Educaciones } from 'src/app/model/component-models';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editaredu',
  templateUrl: './editaredu.component.html',
  styleUrls: ['./editaredu.component.css']
})
export class EditareduComponent implements OnInit {
  educacion:Educaciones;

  onEditar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.editarEdu(id, this.educacion).subscribe(data =>{
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

  constructor(private educacionService:EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.educacionService.obtenerDetalles(id).subscribe(data=>{
      this.educacion = data;
    },err=>{
      alert("Ha ocurrido un error");
      this.router.navigate(['']);
    })
  }

}