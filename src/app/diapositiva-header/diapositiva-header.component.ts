import {Input, Component, OnInit} from '@angular/core';
import { AlternarService } from '../services/alternar.service';

@Component({
  selector: 'app-diapositiva-header',
  templateUrl: './diapositiva-header.component.html',
  styleUrls: ['./diapositiva-header.component.css']
})
export class DiapositivaHeaderComponent implements OnInit {
  banner!: string;
  perfil!: string;
  nombre!: string;
  descripcion!: string;
  localidad!: string;
  @Input() visible = false;

  constructor(private servicioAlternar: AlternarService) { 
  }

  modificar(){
    console.log(this.banner, this.perfil, this.nombre, this.descripcion, this.localidad);
    this.servicioAlternar.disparadorAlternar.emit({
      data:this.visible,
    });
    this.visible = !this.visible;
  }
  

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      this.visible = data;
    });
  }
}
