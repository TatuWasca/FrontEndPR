import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  logged: boolean = false;
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private modalService: NgbModal ) { }

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false})
  }
  
  logout(){
    this.authService.logout()
    this.logged = false
  }

  login(){
    this.authService.login(this.email,this.password)
    this.logged = true
  }

  ngOnInit(): void {
  }

}
