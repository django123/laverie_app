import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Commande} from "../model/commande";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = 'http://localhost:8080/api/v1/commandes';
  private commande = new Commande();

  constructor(private httpClient: HttpClient) { }


  getListCommande(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getCommande(commandeId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${commandeId}`);
  }

  createCommande(commande: Commande): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, commande);
  }

  updateCommande(commandeId: number, commande: Commande): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${commandeId}`, commande);
  }

  deleteCommande(commandeId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${commandeId}`);
  }
}
