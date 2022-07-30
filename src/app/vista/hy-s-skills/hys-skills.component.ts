import { Component, OnInit } from '@angular/core';
import { HyS_Skills } from 'src/app/models/test';

@Component({
  selector: 'app-hys-skills',
  templateUrl: './hys-skills.component.html',
  styleUrls: ['./hys-skills.component.css']
})
export class HySSkillsComponent implements OnInit {
  HyS_SkillsArray: HyS_Skills[] = [
    {nombre: 'Mentalidad de Crecimiento', valor: 5},
    {nombre: 'Capacidad de Organización', valor: 4},
    {nombre: 'Multitareas', valor: 5},
    {nombre: 'Aprendizaje continuo', valor: 5},
    {nombre: 'Proactividad', valor: 4},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
