import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ibge } from '../model/ibge';
import { Observable } from 'rxjs';
import { Cidade } from '../model/cidade';

@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

  private readonly cidadeURL: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"

    public getAll(): Observable<Ibge[]>{
      return this.http.get<Ibge[]>(this.baseUrl)
    }

    listarMunicipios(estado: string){
      return this.http.get<Cidade[]>(this.cidadeURL + estado + "/municipios")
    }
    

  

}
