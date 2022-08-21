import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HySSkills } from 'src/app/models/object-models';

@Injectable({
  providedIn: 'root'
})
export class HysSkillsService {
  private baseUrl = "http://localhost:8080/api/HySSkills"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaSkills() : Observable<HySSkills[]>{
    return this.httpCliente.get<HySSkills[]>(`${this.baseUrl}/traer`);
  }

  añadirSkill(skill:HySSkills) : Observable<Object>{
    return this.httpCliente.post(`${this.baseUrl}/crear`, skill);
  }

  editarSkill(id:number, skill:HySSkills) : Observable<Object>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, skill);
  }

  eliminarSkill(id:number) : Observable<Object>{
    return this.httpCliente.delete(`${this.baseUrl}/borrar/${id}`);
  }
}
