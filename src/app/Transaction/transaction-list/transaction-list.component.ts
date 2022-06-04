import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transaction:Transaction[] | undefined;
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.gettransaction()
  }

  private gettransaction(){
    this.transactionService.getTransactionList().subscribe(data=> {
      this.transaction=data;
    });
  }
}
