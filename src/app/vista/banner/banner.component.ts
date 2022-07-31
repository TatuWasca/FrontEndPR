import { Component, OnInit } from '@angular/core';
import { banner } from 'src/app/models/test';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerArray: banner[] = [
    {id: 1, nombre: 'Pablo Rubiolo', imgbanner: 'assets/images/usuario/banner.jpg', imgperfil: 'assets/images/usuario/icono-perfil.jpg', descripcion: 'Estudiante de secundaria', lugar:'Villa María, Córdoba'}
  ];
  selectedElement: banner = new banner();

  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, animation: false}) 
  }
  ModOrBor(banner:banner){
    this.selectedElement = banner;
  }
  addOrModify(){
    if(this.selectedElement.id === 0){
      this.selectedElement.id = this.bannerArray.length + 1;
      this.bannerArray.push(this.selectedElement)   
    }
    this.selectedElement = new banner();
  }
  borrar(){
    this.bannerArray = this.bannerArray.filter(x => x != this.selectedElement);
    this.selectedElement = new banner();
  }

  constructor(public modalService:NgbModal) { }

  ngOnInit(): void {
  }

}
