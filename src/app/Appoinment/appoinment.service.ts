import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appoinment';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  private baseURL = "http://localhost:8080/Appointment/getall"
  private baseURL1 = "http://localhost:8080/Appointment/create"

  constructor(private httpClient: HttpClient) { }

  getAppointmentList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}`);
  }

  createAppointment(Appointment:Appointment):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,Appointment)
  }
}
