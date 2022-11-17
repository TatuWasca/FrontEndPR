import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  isLogged: boolean = false;
  bannerArray: Banner[] 

  //Permite obtener el banner
  private obtenerBanner(){
    this.BannerService.obtenerListaBan().subscribe(data =>{
      this.bannerArray = data;
    })
  } 

  constructor(private tokenService: TokenService, private BannerService:BannerService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerBanner();
  }
}