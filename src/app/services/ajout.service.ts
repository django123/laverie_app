import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ajout} from "../model/ajout";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AjoutService {
  private baseUrl = 'http://localhost:8080/api/v1/ajouts';

  private ajout = new Ajout();
  private jwtToken: string;

  constructor(private httpClient: HttpClient) { }


  getListAjout(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getAjout(ajoutId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${ajoutId}`);
  }

  createAjout(ajout: Ajout): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, ajout);
  }

  updateAjout(ajoutId: number, ajout: Ajout): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${ajoutId}`, ajout);
  }

  deleteAjout(ajoutId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${ajoutId}`);
  }
}
