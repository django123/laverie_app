import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Caisse} from "../model/caisse";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaisseService {

  private baseUrl = 'http://localhost:8080/api/v1/caisses';

  private caisse = new Caisse();

  constructor(private httpClient: HttpClient) { }


  getListCaisse(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getCaisse(userId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${userId}`);
  }

  createCaisse(caisse: Caisse): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, caisse);
  }

  updateCaisse(userId: number, caisse: Caisse): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${userId}`, caisse);
  }

  deleteCaisse(userId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${userId}`);
  }
}
