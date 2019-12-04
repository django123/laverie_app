import { Injectable } from '@angular/core';
import {Consomation} from "../model/consomation";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsomationService {

  private baseUrl = 'http://localhost:8080/api/v1/consomations';
  private consomation = new Consomation();

  constructor(private httpClient: HttpClient) { }


  getListConsomation(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getConsomation(consomationId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${consomationId}`);
  }

  createConsomation(consomation: Consomation): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, consomation);
  }

  updateConsomation(consomationId: number, consomation: Consomation): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${consomationId}`, consomation);
  }

  deleteConsomation(consomationId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${consomationId}`);
  }
}
