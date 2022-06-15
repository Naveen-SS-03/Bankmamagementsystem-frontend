import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';




@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  
  account:Account=new Account(0,'','',0,'',0,'','',0,0);


  constructor(private accountService: AccountService,
  private router:Router){}

  ngOnInit(): void {
  }


  saveAccount(){
    this.accountService.createAccount(this.account).subscribe(data => {
      console.log(data);
      this.goToAccountList();
    },
    error => console.log(error));
  }

  goToAccountList(){
    this.router.navigate(['Account/getall']);
  }

  onSubmit(){
    console.log(this.account);
    this.saveAccount();
  }

}
