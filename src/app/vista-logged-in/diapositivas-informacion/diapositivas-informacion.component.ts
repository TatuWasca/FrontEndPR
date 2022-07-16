import { Input, Component, OnInit } from '@angular/core';
import { AlternarService } from 'src/app/services/alternar-service/alternar.service';

@Component({
  selector: 'app-diapositivas-informacion',
  templateUrl: './diapositivas-informacion.component.html',
  styleUrls: ['./diapositivas-informacion.component.css']
})
export class DiapositivasInformacionComponent implements OnInit {
  @Input() paquet!: any;
  visible: boolean = false;
  
  nombre!: string;
  imagen!: string;
  descripcion!: string;
  fecha!: string;
  lugar!: string;
  

  constructor(private servicioAlternar: AlternarService) { }

  modificar(){
    this.visible = false

    this.servicioAlternar.disparadorAlternar.emit({
      data:this.paquet,
    });
  }

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      //Checkea que sea el componente a modificar
      if(data["data"][2] == "InformacionBtn" && data["data"][0] == true){
        data["data"][0] = false
        this.paquet = data["data"]

        this.visible = true

        this.paquet[0] = false
        this.paquet[2] = "Body"
      }
    })
  }

}
