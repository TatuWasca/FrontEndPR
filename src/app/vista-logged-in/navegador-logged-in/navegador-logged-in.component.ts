import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navegador-logged-in',
  templateUrl: './navegador-logged-in.component.html',
  styleUrls: ['./navegador-logged-in.component.css']
})
export class NavegadorLoggedInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  logout(){
    this.authService.logout()
  }
  

  ngOnInit(): void {
  }

}
