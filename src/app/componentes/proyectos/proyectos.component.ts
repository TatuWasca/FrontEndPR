import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/component-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  isLogged: boolean = false;
  proyectosArray: Proyectos[] 

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered: true, animation: true, backdrop: 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.modalService.dismissAll();
  }

  //Permite obtener los proyectos
  private obtenerProy(){
    this.ProyectosService.obtenerListaProy().subscribe(data =>{
      this.proyectosArray = data;
    })
  }

  //Funciones CRUD
  borrar(id: number){
    this.ProyectosService.eliminarProy(id).subscribe(data =>{
      this.proyectosArray = data;
      this.cerrar();
    })

  }

  constructor(public modalService:NgbModal, private tokenService: TokenService, private ProyectosService:ProyectosService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
    this.obtenerProy();
  }
}