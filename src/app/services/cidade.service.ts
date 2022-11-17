import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../model/cidade';
import { IbgeService } from './ibge.service';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
  private  baseUrl2:string =`distritos`
    public getAll(estado: number): Observable<any>{
      return this.http.get<any>(`${this.baseUrl}/${estado}/${this.baseUrl2}`)
    }
}
