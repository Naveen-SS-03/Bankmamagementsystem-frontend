import { Component, OnInit } from '@angular/core';
import { Recipient } from '../recipient';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.css']
})
export class RecipientListComponent implements OnInit {

  recipient:Recipient[] | undefined;
  constructor(private recipientService: RecipientService) { }

  ngOnInit(): void {
    this.getrecipient()
  }

 

  private getrecipient(){
    this.recipientService.getRecipientList().subscribe(data=> {
      this.recipient=data;
    });
  }
}
