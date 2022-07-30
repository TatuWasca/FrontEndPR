import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {  
  ModOrBor(){
    
  }

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  
  addOrModify(){
   
  }

  borrar(){
    
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
}
