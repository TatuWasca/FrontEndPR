import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navegador-logged-in',
  templateUrl: './navegador-logged-in.component.html',
  styleUrls: ['./navegador-logged-in.component.css']
})
export class NavegadorLoggedInComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: NgbModal ) { }

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true})
  }
  
  logout(){
    this.authService.logout()
  }
  

  ngOnInit(): void {
  }

}
