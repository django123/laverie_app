import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Produit} from "../model/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8080/api/v1/produits';
  private produit = new Produit();

  constructor(private httpClient: HttpClient) { }


  getListProduit(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getProduit(produitId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${produitId}`);
  }

  createProduit(produit: Produit): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, produit);
  }

  updateProduit(produitId: number, produit: Produit): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${produitId}`, produit);
  }

  deleteProduit(produitId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${produitId}`);
  }
}
