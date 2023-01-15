import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/model/component-models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = "https://backendpr-4005.onrender.com/Banner"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaBan() : Observable<Banner[]>{
    return this.httpCliente.get<Banner[]>(`${this.baseUrl}/traer`);
  }

  obtenerDetalles(id: number) : Observable<Banner>{
    return this.httpCliente.get<Banner>(`${this.baseUrl}/detalles/${id}`);
  }

  editarBan(id:number, ban:Banner) : Observable<any>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, ban);
  }
}