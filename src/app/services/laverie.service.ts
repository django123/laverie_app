import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Laverie} from "../model/laverie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LaverieService {

  private baseUrl = 'http://localhost:8080/api/v1/laveries';
  private laverie = new Laverie();

  constructor(private httpClient: HttpClient) { }


  getListLaverie(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getLaverie(consomationId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${consomationId}`);
  }

  createLaverie(laverie: Laverie): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, laverie);
  }

  updateLaverie(laverieId: number, laverie: Laverie): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${laverieId}`, laverie);
  }

  deleteLaverie(laverieId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${laverieId}`);
  }
}
