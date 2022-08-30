import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidades } from '../models/cidades';
import { Estados } from '../models/estados';

/* const urle: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const urlc: string = "http://servicodados.ibge.gov.br/api/v1/localidades/estados"; */

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  private http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  findEstado(): Observable<Estados[]> {
    return this.http.get<Estados[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados");
  }

  findCidade(id: number): Observable<Cidades[]> {
    return this.http.get<Cidades[]>(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
  }
}
