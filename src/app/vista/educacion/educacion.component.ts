import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionArray: educacion[] = [
    {id: 1, nombre: 'Instituto San Antonio', img: 'assets/images/usuario/logo-san-antonio.jpg', descripcion: 'Bachiller en Administración y Economía', lugar: 'Villa María, Córdoba', fecha: '2017 – 2022'},
    {id: 2, nombre: 'One World Academy', img: 'assets/images/usuario/logo-one-world-academy.jpg', descripcion: 'Aprendizaje de inglés', lugar: 'Villa María', fecha: '2017 – 2022' },
    {id: 3,nombre: 'Argentina Programa', img: 'assets/images/usuario/logo-argentina-programa.jpg', descripcion: 'Aprendizaje de programación', lugar: 'Via online', fecha: '2021 – 2022' },
  ];
  selectedElement: educacion = new educacion();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(educacion:educacion){
    this.selectedElement = educacion;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.educacionArray.length + 1;
      this.educacionArray.push(this.selectedElement)   
    }
    this.selectedElement = new educacion();
  }
  borrar(){
    this.educacionArray = this.educacionArray.filter(x => x != this.selectedElement);
    this.selectedElement = new educacion();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
