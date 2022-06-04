import { Component, OnInit } from '@angular/core';
import {Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  account:Account[] | undefined;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getaccount()
  }

  private getaccount(){
    this.accountService.getAccountList().subscribe(data=> {
      this.account=data;
    });
  }

}
