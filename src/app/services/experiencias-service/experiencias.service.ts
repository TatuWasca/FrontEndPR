import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from 'src/app/models/object-models';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private baseUrl = "http://localhost:8080/api/Experiencias"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaExp() : Observable<Experiencias[]>{
    return this.httpCliente.get<Experiencias[]>(`${this.baseUrl}/traer`);
  }

  añadirExp(Exp:Experiencias) : Observable<Object>{
    return this.httpCliente.post(`${this.baseUrl}/crear`, Exp)
  }

  editarExp(id:number, Exp:Experiencias) : Observable<Object>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, Exp);
  }

  eliminarExp(id:number) : Observable<Object>{
    return this.httpCliente.delete(`${this.baseUrl}/borrar/${id}`);
  }
}
