import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3001/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<{vehicles: Vehicle[]}> {
    return this.http.get<{vehicles: Vehicle[]}>(this.apiUrl);
  }

  getVehicleData(vin: string): Observable<any> {
    const url = 'http://localhost:3001/vehicleData';
    return this.http.post(url, { vin });
  }
}
