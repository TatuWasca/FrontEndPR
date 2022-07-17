import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cuerpo-logged-in',
  templateUrl: './cuerpo-logged-in.component.html',
  styleUrls: ['./cuerpo-logged-in.component.css']
})
export class CuerpoLoggedInComponent implements OnInit {

  openMod(contenido:any) {
    this.modalService.open(contenido, {centered:true})
  }

  openAdd(content:any) {
    this.modalService.open(content, {centered:true})
  }

  openBorrar(contents:any){
    this.modalService.open(contents, {centered:true})
  }

  borrar(){
    console.log("Nada por ahora")
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
}
