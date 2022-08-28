import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/model/component-models';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  private baseUrl = "https://backendpr.herokuapp.com/Proyectos"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaProy() : Observable<Proyectos[]>{
    return this.httpCliente.get<Proyectos[]>(`${this.baseUrl}/traer`);
  }

  añadirProy(Proy:Proyectos) : Observable<any>{
    return this.httpCliente.post(`${this.baseUrl}/crear`, Proy)
  }

  editarProy(id:number, Proy:Proyectos) : Observable<any>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, Proy);
  }

  eliminarProy(id:number) : Observable<any>{
    return this.httpCliente.delete(`${this.baseUrl}/borrar/${id}`);
  }
}
