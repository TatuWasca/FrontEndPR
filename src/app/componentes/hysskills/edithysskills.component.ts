import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Hysskills } from 'src/app/model/component-models';
import { HysSkillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-edithysskills',
  templateUrl: './edithysskills.component.html',
  styleUrls: ['./edithysskills.component.css']
})
export class EdithysskillsComponent implements OnInit {
  hysskills:Hysskills;

  onEditar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.hysSkillsService.editarSkill(id, this.hysskills).subscribe(data =>{
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
    valorF: new FormControl('', [Validators.required]),
  });
  get NombreF(){
    return this.formElement.get("nombreF");
  }
  get ValorF(){
    return this.formElement.get("valorF");
  }

  constructor(private hysSkillsService:HysSkillsService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.hysSkillsService.obtenerDetalles(id).subscribe(data=>{
      this.hysskills= data;
    },err=>{
      alert("Ha ocurrido un error");
      this.router.navigate(['']);
    })
  }
}
