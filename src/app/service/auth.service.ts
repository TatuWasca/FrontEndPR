import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/model/jwt-dto';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "http://localhost:8080/auth/"

  constructor(private httpClient: HttpClient) { }

  public login(usuario: Usuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + "login", usuario);
  }
}
