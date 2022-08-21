import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/models/object-models';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private baseUrl = "http://localhost:8080/api/Proyectos"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaProy() : Observable<Proyectos[]>{
    return this.httpCliente.get<Proyectos[]>(`${this.baseUrl}/traer`);
  }

  añadirProy(Proy:Proyectos) : Observable<Object>{
    return this.httpCliente.post(`${this.baseUrl}/crear`, Proy)
  }

  editarProy(id:number, Proy:Proyectos) : Observable<Object>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, Proy);
  }

  eliminarProy(id:number) : Observable<Object>{
    return this.httpCliente.delete(`${this.baseUrl}/borrar/${id}`);
  }
}
