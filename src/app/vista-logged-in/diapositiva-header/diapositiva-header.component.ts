import { Input, Component, OnInit } from '@angular/core';
import { AlternarService } from 'src/app/services/alternar-service/alternar.service';

@Component({
  selector: 'app-diapositiva-header',
  templateUrl: './diapositiva-header.component.html',
  styleUrls: ['./diapositiva-header.component.css']
})
export class DiapositivaHeaderComponent implements OnInit {
  @Input() paquet!: any;
  visible: boolean = false;

  banner!: string;
  perfil!: string;
  nombre!: string;
  descripcion!: string;
  localidad!: string;
  
  

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
      if(data["data"][2] == "BannerBtn" && data["data"][0] == true){
        data["data"][0] = false
        this.paquet = data["data"]

        this.visible = true

        this.paquet[0] = false
        this.paquet[2] = "Body"
      }
    })
  }
}
