import { Component, OnInit} from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  //falta implementar formularios reactivos
  email!: string;
  password!: string;

  constructor(private authService:AuthService) {
  }

  //el sistema de routing es básico ya que aun no presento una db para autenticar los datos
  login() {
    this.authService.login(this.email,this.password)
  }

  ngOnInit(): void {
  }
}