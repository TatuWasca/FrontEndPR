import { Component, OnDestroy, OnInit } from '@angular/core';
import { HySSkills } from 'src/app/models/object-models';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HysSkillsService } from 'src/app/services/hysskills-service/hysskills.service';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HySSkillsComponent implements OnInit {
  HyS_SkillsArray: HySSkills[]

  NewSkill : HySSkills = new HySSkills();

  //Abre el modal
  open(contenido:any) {
    this.modalService.open(contenido, {centered:true, backdrop : 'static'}) 
  }

  //Cierra el modal, quita los cambios, resetea el formulario y sus validators
  cerrar(){
    this.obtenerSkills();
    this.modalService.dismissAll();
    this.formElement.reset();

    //Borrar los validators de valid y invalid, luego de cancelar el form
    Object.keys(this.formElement.controls).forEach(key => {
      this.formElement.get(key)!.setErrors(null) ;
    });
  }
 
  //Permite obtener las skills
  private obtenerSkills(){
    this.HysSkillsService.obtenerListaSkills().subscribe(data =>{
      this.HyS_SkillsArray = data;
    })
  } 

  //Comprueba que sea validos sus inputs al hacer submit y llama a la función CRUD correspondiente
  onCrear(){
    if(this.formElement.valid){
      this.crear();
      this.cerrar();
    }else{
      this.formElement.markAllAsTouched(); 
    } 
  }
  onBorrar(id: number){
    this.borrar(id);
    this.cerrar();
  }
  onEditar(id:number,skill:HySSkills){
    if(this.formElement.valid){
      this.editar(id,skill); 
      this.cerrar();
    }else{
      this.formElement.markAllAsTouched(); 
    }
  }

  //Funciones CRUD
  crear(){
    this.HysSkillsService.añadirSkill(this.NewSkill).subscribe();
  }
  borrar(id: number){
    this.HysSkillsService.eliminarSkill(id).subscribe();
  }
  editar(id:number, skill:HySSkills){
    this.HysSkillsService.editarSkill(id, skill).subscribe();
    
  }

  //Funciones para los formularios
  formElement = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    valor: new FormControl('', [Validators.required]),
  });
  get Nombre(){
    return this.formElement.get("nombre");
  }
  get Valor(){
    return this.formElement.get("valor");
  }

  constructor(public modalService:NgbModal, private HysSkillsService:HysSkillsService) { }

  ngOnInit(): void {
    this.obtenerSkills();
  };
}