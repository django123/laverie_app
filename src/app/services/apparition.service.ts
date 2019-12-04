import { Injectable } from '@angular/core';
import {Apparition} from "../model/apparition";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApparitionService {

  private baseUrl = 'http://localhost:8080/api/v1/apparitions';
  private apparition = new Apparition();
  private jwtToken: string;

  constructor(private httpClient: HttpClient) { }


  getListApparition(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getApparition(apparitionId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${apparitionId}`);
  }

  createApparition(apparition: Apparition): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, apparition);
  }

  updateApparition(apparitionId: number, apparition: Apparition): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${apparitionId}`, apparition);
  }

  deleteApparition(apparitionId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${apparitionId}`);
  }
}
