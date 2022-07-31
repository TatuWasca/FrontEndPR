import { Component, OnInit } from '@angular/core';
import { HyS_Skills } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HySSkillsComponent implements OnInit {
  HyS_SkillsArray: HyS_Skills[] = [
    {id: 1, nombre: 'Mentalidad de Crecimiento', valor: 100},
    {id: 2, nombre: 'Capacidad de Organización', valor: 80},
    {id: 3, nombre: 'Multitareas', valor: 90},
    {id: 4,nombre: 'Aprendizaje continuo', valor: 80},
    {id: 5,nombre: 'Proactividad', valor: 70},
  ];
  selectedElement: HyS_Skills = new HyS_Skills();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(HyS_Skills:HyS_Skills){
    this.selectedElement = HyS_Skills;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.HyS_SkillsArray.length + 1;
      this.HyS_SkillsArray.push(this.selectedElement)   
    }
    this.selectedElement = new HyS_Skills();
  }
  borrar(){
    this.HyS_SkillsArray = this.HyS_SkillsArray.filter(x => x != this.selectedElement);
    this.selectedElement = new HyS_Skills();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
