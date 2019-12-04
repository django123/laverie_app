import { Injectable } from '@angular/core';
import {Type} from "../model/type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private baseUrl = 'http://localhost:8080/api/v1/types';
  private type = new Type();

  constructor(private httpClient: HttpClient) { }


  getListType(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getType(typeId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${typeId}`);
  }

  createType(type: Type): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, type);
  }

  updateType(typeId: number, type: Type): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${typeId}`, type);
  }

  deleteType(typeId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${typeId}`);
  }
}
