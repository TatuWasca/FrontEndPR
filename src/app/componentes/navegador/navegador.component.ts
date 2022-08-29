import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/model/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  isLogged: boolean = true;
  isLoginFailed: boolean = false;
  Usuario: Usuario;
  nombreUsuario: string;
  password: string;
  roles: string[];
  errMsj: string[] = [];

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation:false, backdrop: 'static'})
    if(this.isLogged){
      setTimeout(() => { document.getElementById("aceptar")!.focus() }, 50)
    }
  }


  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.formElement.reset();
    this.modalService.dismissAll();
  }

  //Chequea si los inputs son validos
  onLogin(): void{
    if(this.formElement.valid){
      this.login();
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }
  //Abre la sesión del usuario
  login(){
    this.Usuario = new Usuario(this.nombreUsuario, this.password);this.authService
    .login(this.Usuario).subscribe(data =>{
      this.isLogged = true;
      this.isLoginFailed = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.cerrar();
      window.location.reload();
    }, err =>{
      this.isLogged = false;
      this.isLoginFailed = true;
      this.errMsj = err.error.mensaje;
      this.formElement.reset();
      alert("Usuario y/o contraseña incorrecta")
    });
  }
  //Cierra la sesión del usuario
  logout(): void{
    this.tokenService.logOut();
    this.cerrar();
    window.location.reload();
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required,Validators.maxLength(25)]),
    password: new FormControl('', [Validators.required,Validators.maxLength(25)]),
  });
  get NombreUsuario(){
    return this.formElement.get("nombreUsuario");
  }
  get Password(){
   return this.formElement.get("password");
  }

  constructor(private modalService: NgbModal, private tokenService: TokenService, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFailed = false;
    }
  }
}
