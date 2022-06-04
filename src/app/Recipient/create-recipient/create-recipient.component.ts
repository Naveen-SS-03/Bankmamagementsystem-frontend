import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipient } from '../recipient';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-create-recipient',
  templateUrl: './create-recipient.component.html',
  styleUrls: ['./create-recipient.component.css']
})
export class CreateRecipientComponent implements OnInit {

  recipient:Recipient=new Recipient();

  constructor(private recipientService: RecipientService,
  private router:Router){}

  ngOnInit(): void {
  }


  saveRecipient(){
    this.recipientService.createRecipient(this.recipient).subscribe(data => {
      console.log(data);
      this.goToRecipientList();
    },
    error => console.log(error));
  }

  goToRecipientList(){
    this.router.navigate(['/Recipient']);
  }

  onSubmit(){
    console.log(this.recipient);
    this.saveRecipient();
  }

}
