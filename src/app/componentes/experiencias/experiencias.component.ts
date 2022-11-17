import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaService } from 'src/app/service/experiencias.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  isLogged: boolean = false;
  experienciasArray: Experiencias[] 

  NewExp: Experiencias = new Experiencias();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: true, backdrop: 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.modalService.dismissAll();
  }

  //Permite obtener las Experiencias
  private obtenerExp(){
    this.experienciaService.obtenerListaExp().subscribe(data =>{
      this.experienciasArray = data;
    })
  }

  borrar(id: number){
    this.experienciaService.eliminarExp(id).subscribe(data =>{
      this.experienciasArray = data;
      this.cerrar();
    })
  }

  constructor(public modalService:NgbModal, private tokenService: TokenService, private experienciaService:ExperienciaService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerExp();
  }
}