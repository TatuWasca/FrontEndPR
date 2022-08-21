import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/models/object-models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = "http://localhost:8080/api/Banner"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaBan() : Observable<Banner[]>{
    return this.httpCliente.get<Banner[]>(`${this.baseUrl}/traer`);
  }

  editarBan(id:number, ban:Banner) : Observable<Object>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, ban);
  }
}