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

  constructor(private authService: AuthService, private modalService: NgbModal ) { }

  formElement = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    contraseña: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false})
  }
  
  logout(contenido:any){
    this.modalService.dismissAll(contenido)
    this.isLogged = false
  }

  login(contenido:any){
    if(this.formElement.valid){
      this.modalService.dismissAll(contenido)
      this.formElement.reset()

      this.isLogged = true
    }
  }

  get Contrasena(){
    return this.formElement.get("contraseña");
  }
 
  get Usuario(){
   return this.formElement.get("usuario");
  }

  ngOnInit(): void {
  }

}
