import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/service/token.service';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  isLoginFailed: boolean = false;
  Usuario: Usuario;
  nombreUsuario: string;
  password: string;
  roles: string[];
  errMsj: string[] = [];

  cancelar(){
    this.formElement.reset();
    this.router.navigate(['']);
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
      this.router.navigate([''])
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
    this.router.navigate([''])
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

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFailed = false;
    }
  }
}
