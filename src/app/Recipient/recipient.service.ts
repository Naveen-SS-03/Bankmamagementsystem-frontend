import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipient } from './recipient';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {
  private baseURL = "http://localhost:8080/Recipient/getall"
  private baseURL1 = "http://localhost:8080/Recipient/create"


  constructor(private httpClient: HttpClient) { }

  getRecipientList(): Observable<Recipient[]>{
    return this.httpClient.get<Recipient[]>(`${this.baseURL}`);
  }

  createRecipient(Recipient:Recipient):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,Recipient)
  }

}
