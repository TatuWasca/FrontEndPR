import {Input, Component, OnInit} from '@angular/core';
import { AlternarService } from 'src/app/services/alternar-service/alternar.service';

@Component({
  selector: 'app-diapositiva-acerca-de',
  templateUrl: './diapositiva-acerca-de.component.html',
  styleUrls: ['./diapositiva-acerca-de.component.css']
})
export class DiapositivaAcercaDeComponent implements OnInit {
  @Input() paquet!: any;
  visible: boolean = false;

  descripcion!: string;
 

  constructor(private servicioAlternar: AlternarService) { 
  }

  modificar(){
    this.visible = false

    this.servicioAlternar.disparadorAlternar.emit({
      data:this.paquet,
    })
    this.paquet = []
  }
  

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      //Checkea que sea el componente a modificar
      if(data["data"][2] == "AcercaDeBtn" && data["data"][0] == true){
        data["data"][0] = false
        this.paquet = data["data"]

        this.visible = true

        this.paquet[0] = false
        this.paquet[2] = "Body"
      }
    })
  }
}
