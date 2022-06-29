import { Input, Component, OnInit } from '@angular/core';
import { AlternarService } from '../services/alternar.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  @Input() paquet: Array<any>= [true];

  alternar(e:any) {
    //Variables utilizadas para identificar el div a alternar y guardar valores
    var value = [e.path[1].target, e.path[1].name]
    var target = document.getElementsByName(value[0])[0]
    var targetValue = target.getAttribute("name")

    target.style.display = "none"

    //Empuja el nombre del div y el nombre de la seccion 
    this.paquet.push(targetValue, value[1])

    this.servicioAlternar.disparadorAlternar.emit({
      data:this.paquet
    });
  };
  
  constructor(private servicioAlternar: AlternarService) { }

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      this.paquet = data["data"];
      if(this.paquet[0] == false){
        //Variable local que almacena la ubicación del div
        var searcher = document.getElementsByName(this.paquet[1])[0]
        
        searcher.style.display = "block"
        this.paquet = [true]
      } 
    });
  }
}
