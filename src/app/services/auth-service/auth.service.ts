import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'inicio/logged-in';
  token:any;

  constructor(private http: HttpClient, private router: Router) { }

  //Al no presentar una db, solamente cambia el componente y no comprobueba el email y contraseña
  login(email:string, password:string){
    this.uri += '/authenticate'
    this.router.navigate(["logged-in"])
  };

  logout(){
    this.router.navigate(["logged-out"])
  }

  public get logIn():boolean{
    return (localStorage.getItem("token") !== null);
  }

}
