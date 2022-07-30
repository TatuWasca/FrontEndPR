import { Component, OnInit } from '@angular/core';

import { banner } from 'src/app/models/test';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerArray: banner[] = [
    {nombre: 'Pablo Rubiolo', imgbanner: 'assets/images/usuario/banner.jpg', imgperfil: 'assets/images/usuario/icono-perfil.jpg', descripcion: 'Estudiante de secundaria', lugar:'Villa María, Córdoba'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
