import { Component,  OnInit } from '@angular/core';
import { Hysskills } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HysSkillsService } from 'src/app/service/hysskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HySSkillsComponent implements OnInit {
  isLogged:boolean = false;
  HysskillsArray: Hysskills[]

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: true, backdrop: 'static'})
  }

  //Cierra el modal
  cerrar(){
    this.modalService.dismissAll();
  }
 
  //Permite obtener las skills
  private obtenerSkills(){
    this.HysSkillsService.obtenerListaSkills().subscribe(data =>{
      this.HysskillsArray = data;
    })
  } 

  borrar(id: number){
    this.HysSkillsService.eliminarSkill(id).subscribe(data =>{
      this.HysskillsArray = data;
      this.cerrar();
    });
  }

  constructor(public modalService:NgbModal,private tokenService: TokenService, private HysSkillsService:HysSkillsService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerSkills();
  };
}