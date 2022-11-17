import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Acercade } from 'src/app/model/component-models';
import { AcercadeService } from 'src/app/service/acercade.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css']
})
export class EditacercadeComponent implements OnInit {
  acercade:Acercade;

  onEditar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.acercadeService.editarAcDe(id, this.acercade).subscribe(data =>{
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
    descripcionF: new FormControl('', [Validators.required, Validators.maxLength(250)]),
  });
  get DescripcionF(){
    return this.formElement.get("descripcionF");
  }

  constructor(private acercadeService:AcercadeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.acercadeService.obtenerDetalles(id).subscribe(data=>{
      this.acercade = data;
    },err=>{
      alert("Ha ocurrido un error");
      this.router.navigate(['']);
    })
  }
}
