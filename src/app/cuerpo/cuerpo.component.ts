import { Input, Component, OnInit } from '@angular/core';
import { AlternarService } from '../services/alternar.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  @Input()visible = true;

  alternar() {
    this.servicioAlternar.disparadorAlternar.emit({
      data:this.visible,
    });
    this.visible = !this.visible;
  }

  constructor(private servicioAlternar: AlternarService) { }

  ngOnInit(): void {
    this.servicioAlternar.disparadorAlternar.subscribe(data => {
      this.visible = data;
    });
  }

}
