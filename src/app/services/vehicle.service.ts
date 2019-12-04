import { Injectable } from '@angular/core';
import {Vehicle} from "../model/vehicle";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl = 'http://localhost:8080/api/v1/vehicles';
  private vehicle = new Vehicle();

  constructor(private httpClient: HttpClient) { }


  getListVehicle(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }


  getVehicle(typeId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${typeId}`);
  }

  createVehicle(vehicle: Vehicle): Observable<any> {
    return  this.httpClient.post(`${this.baseUrl}`, vehicle);
  }

  updateVehicle(vehicleId: number, vehicle: Vehicle): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${vehicleId}`, vehicle);
  }

  deleteVehicle(vehicleId: number) {
    return this.httpClient.delete(`${this.baseUrl}/${vehicleId}`);
  }
}
