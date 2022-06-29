import {Input, Component, OnInit} from '@angular/core';
import { AlternarService } from '../services/alternar.service';

@Component({
  selector: 'app-diapositiva-acerca-de',
  templateUrl: './diapositiva-acerca-de.component.html',
  styleUrls: ['./diapositiva-acerca-de.component.css']
})
export class DiapositivaAcercaDeComponent implements OnInit {
  @Input() paquet!: any;
  descripcion!: string;
  visible: boolean = false;
  
  

  constructor(private servicioAlternar: AlternarService) { 
  }

  modificar(){
    this.visible = false

    this.servicioAlternar.disparadorAlternar.emit({
      data:this.paquet,
    });
  }
  

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      //Checkea que sea el componente a modificar
      if(data["data"][2] == "AcercaDeBtn"){
        this.paquet = data["data"];
        this.visible = this.paquet[0]
        this.paquet[0] = false
      }
    });
  }
}
