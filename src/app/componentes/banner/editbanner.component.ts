import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Banner } from 'src/app/model/component-models';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {
  banner:Banner;

  onEditar(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.bannerService.editarBan(id, this.banner).subscribe(data =>{
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
    nombreF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    descripcionF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    localidadF: new FormControl('', [Validators.required, Validators.maxLength(25)]),
  });
  get NombreF(){
    return this.formElement.get("nombreF");
  }
  get DescripcionF(){
    return this.formElement.get("descripcionF");
  }
  get LocalidadF(){
  return this.formElement.get("localidadF");
  }


  constructor(private bannerService:BannerService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.bannerService.obtenerDetalles(id).subscribe(data=>{
      this.banner = data;
    },err=>{
      alert("Ha ocurrido un error");
      this.router.navigate(['']);
    })
  }
}