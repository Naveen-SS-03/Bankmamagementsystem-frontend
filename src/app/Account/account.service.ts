import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  private baseURL = "http://localhost:8080/Account/getall"
  private baseURL1 = "http://localhost:8080/Account/create"

  constructor(private httpClient: HttpClient) { }

  getAccountList(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }

  createAccount(Account:Account):Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`,Account)
  }

  getAccountById(id: number): Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
  }

}
