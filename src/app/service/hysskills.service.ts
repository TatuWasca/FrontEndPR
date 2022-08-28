import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hysskills } from 'src/app/model/component-models';

@Injectable({
  providedIn: 'root'
})
export class HysSkillsService {
  private baseUrl = "https://backendpr.herokuapp.com/Hysskills"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaSkills() : Observable<Hysskills[]>{
    return this.httpCliente.get<Hysskills[]>(`${this.baseUrl}/traer`);
  }

  añadirSkill(skill:Hysskills) : Observable<any>{
    return this.httpCliente.post(`${this.baseUrl}/crear`, skill);
  }

  editarSkill(id:number, skill:Hysskills) : Observable<any>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, skill);
  }

  eliminarSkill(id:number) : Observable<any>{
    return this.httpCliente.delete(`${this.baseUrl}/borrar/${id}`);
  }
}
