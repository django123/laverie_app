import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ticket} from "../model/ticket";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = 'http://localhost:8080/api/v1/tickets';
  private ticket = new Ticket();

  constructor(private httpClient: HttpClient) { }


  getListTicket(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getTicket(ticketId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${ticketId}`);
  }

  createTicket(ticket: Ticket): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, ticket);
  }

  updateTicket(ticketId: number, ticket: Ticket): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${ticketId}`, ticket);
  }

  deleteTicket(ticketId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${ticketId}`);
  }
}
