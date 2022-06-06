import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseURL = "http://localhost:8080/Transaction/getall"
  private baseURL1 ="http://localhost:8080/Transaction/create"


  constructor(private httpClient: HttpClient) { }

  getTransactionList(): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseURL}`);
  }

  createTransaction(transaction:Transaction):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,transaction)
  }

}
