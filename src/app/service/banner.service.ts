import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/model/component-models';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private baseUrl = "https://backendpr.herokuapp.com/Banner"

  constructor(private httpCliente: HttpClient) { }

  obtenerListaBan() : Observable<Banner[]>{
    return this.httpCliente.get<Banner[]>(`${this.baseUrl}/traer`);
  }

  editarBan(id:number, ban:Banner) : Observable<any>{
    return this.httpCliente.put(`${this.baseUrl}/editar/${id}`, ban);
  }
}