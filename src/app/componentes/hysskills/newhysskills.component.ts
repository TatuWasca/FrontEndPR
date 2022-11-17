import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hysskills } from 'src/app/model/component-models';
import { HysSkillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-newhysskills',
  templateUrl: './newhysskills.component.html',
  styleUrls: ['./newhysskills.component.css']
})
export class NewhysskillsComponent implements OnInit {
  NewSkill: Hysskills = new Hysskills();

  onCrear(): void{
    this.hysSkillsService.añadirSkill(this.NewSkill).subscribe(data =>{
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
    valorF: new FormControl('', [Validators.required]),
  });
  get NombreF(){
    return this.formElement.get("nombreF");
  }
  get ValorF(){
    return this.formElement.get("valorF");
  }


  constructor(private hysSkillsService:HysSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

}