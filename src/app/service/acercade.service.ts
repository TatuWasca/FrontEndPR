import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from 'src/app/model/component-models';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {
  private baseUrl = "https://backendpr.herokuapp.com/Acercade"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaAcDe() : Observable<Acercade[]>{
    return this.httpCliente.get<Acercade[]>(`${this.baseUrl}/traer`);
  }

  obtenerDetalles(id: number) : Observable<Acercade>{
    return this.httpCliente.get<Acercade>(`${this.baseUrl}/detalles/${id}`);
  }

  editarAcDe(id:number, AcDe:Acercade) : Observable<any>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, AcDe);
  }
}