import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {
  loader:boolean = true;

  ngOnInit(): void {
    setTimeout(()=>{                           
      this.loader = false;
    }, 2000);
  }
}
