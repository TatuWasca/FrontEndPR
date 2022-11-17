import { Component, OnInit } from '@angular/core';
import { Educaciones } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educaciones',
  templateUrl: './educaciones.component.html',
  styleUrls: ['./educaciones.component.css']
})
export class EducacionesComponent implements OnInit {
  isLogged: boolean = false;
  educacionesArray: Educaciones[] 

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: true, backdrop: 'static'})  
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.modalService.dismissAll();
  }

  //Permite obtener las educaciones
  private obtenerEdu(){
    this.educacionService.obtenerListaEdu().subscribe(data =>{
      this.educacionesArray = data;
    })
  }

  //Funciones CRUD
  borrar(id: number){
    this.educacionService.eliminarEdu(id).subscribe(data =>{
      this.educacionesArray = data;
      this.cerrar();
    })
  }
  
  constructor(public modalService:NgbModal,private tokenService: TokenService, private educacionService:EducacionService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerEdu();
  }
}