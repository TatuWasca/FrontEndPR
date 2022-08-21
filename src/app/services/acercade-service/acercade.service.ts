import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from 'src/app/models/object-models';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  private baseUrl = "http://localhost:8080/api/Acercade"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaAcDe() : Observable<Acercade[]>{
    return this.httpCliente.get<Acercade[]>(`${this.baseUrl}/traer`);
  }

  editarAcDe(id:number, AcDe:Acercade) : Observable<Object>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, AcDe);
  }
}