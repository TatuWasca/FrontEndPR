import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  isLogged: boolean = false;

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }
  
  //Cierra la sesión del usuario
  logout(contenido:any){
    this.modalService.dismissAll(contenido)
    this.isLogged = false
  }

  //Abre la sesión del usuario
  login(contenido:any){
    if(this.formElement.valid){
      this.modalService.dismissAll(contenido)
      this.formElement.reset()

      this.isLogged = true
    }
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]),
  });
  get Contrasena(){
    return this.formElement.get("contraseña");
  }
  get Usuario(){
   return this.formElement.get("usuario");
  }

  constructor(private authService: AuthService, private modalService: NgbModal ) { }

  ngOnInit(): void {
  }
}
