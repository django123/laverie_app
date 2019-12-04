import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Client} from "../model/client";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/v1/clients';
  private client = new Client();

  constructor(private httpClient: HttpClient) { }


  getListClient(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getClient(clientId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${clientId}`);
  }

  createClient(client: Client): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, client);
  }

  updateClient(clientId: number, client: Client): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${clientId}`, client);
  }

  deleteClient(clientId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${clientId}`);
  }
}
