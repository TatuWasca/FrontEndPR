import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navegador-logged-out',
  templateUrl: './navegador-logged-out.component.html',
  styleUrls: ['./navegador-logged-out.component.css']
})
export class NavegadorLoggedOutComponent implements OnInit { 
  email!:string
  password!:string

  constructor(private modalService: NgbModal, private authService:AuthService) { }

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true})
  }
  
  login(){
    this.authService.login(this.email,this.password)
  }

  ngOnInit(): void {
  }

}
