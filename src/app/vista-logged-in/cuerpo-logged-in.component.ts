import { Input, Component, OnInit } from '@angular/core';
import { AlternarService } from '../services/alternar-service/alternar.service';


@Component({
  selector: 'app-cuerpo-logged-in',
  templateUrl: './cuerpo-logged-in.component.html',
  styleUrls: ['./cuerpo-logged-in.component.css']
})
export class CuerpoLoggedInComponent implements OnInit {
  @Input() paquet: Array<any> = [true]
  checker:boolean = true

  //Permite alternar entre la seccion y el formulario para modificarla
  alternar(div:any) {
    //Checkea si ya hay un elemento siendo modificado
    if(this.checker == true) {
      //Cambia el estado, evitando modificar multiples elementos
      this.checker = false
      
      var value = [div.path[1].target, div.path[1].name]
      var target = document.getElementsByName(value[0])[0]
      var targetValue = target.getAttribute("name")

      //Empuja el nombre del div y el nombre de la seccion, el tercer parámetro son las coordenadas del elemento
      this.paquet.push(targetValue, value[1], target.getBoundingClientRect()["y"])

      target.style.display = "none"

      this.servicioAlternar.disparadorAlternar.emit({
        data:this.paquet
      })
    } 
    else 
    {
      //Mueve a la sección en donde está el formulario
      console.log(this.paquet)
      scrollTo(0, this.paquet[3])
    }
  }
  
  creatediv() {
    //Aun no funciona
    //Serviciria para crear los formularios para modificar la información, al crear el componente necesario de manera temporal
    //Su función principal es acomodar el formulario en el lugar donde estaba la seccion
    var template = document.createElement("app-diapositivas-informacion")
    var div = document.getElementById("here")  
  }

  constructor(private servicioAlternar: AlternarService) { }

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      //Evita un bucle, al checkear el estado y el nombre
      if(data["data"][0] == false && data["data"][2] == "Body"){
        data["data"][0] = true
        this.paquet = data["data"]
        this.checker = true

        //Identifica el div y cambia su valor
        document.getElementsByName(this.paquet[1])[0].style.display = "block"

        this.paquet = [true]
      }
    })
  }
}
