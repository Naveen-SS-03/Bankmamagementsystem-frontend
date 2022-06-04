import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './Account/account-list/account-list.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipientListComponent } from './Recipient/recipient-list/recipient-list.component';
import { CreateRecipientComponent } from './Recipient/create-recipient/create-recipient.component';
import { HomeComponent } from './home/home.component';

import { CreateAppoinmentComponent } from './Appoinment/create-appoinment/create-appoinment.component';
import { AppoinmentListComponent } from './Appoinment/appoinment-list/appoinment-list.component';
import { CreateTransactionComponent } from './Transaction/create-transaction/create-transaction.component';
import { TransactionListComponent } from './Transaction/transaction-list/transaction-list.component';
import { AdminComponent } from './Admin-front/admin/admin.component';
import { RegistrationComponent } from './Admin-front/registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AccountListComponent,
    CreateTransactionComponent,
    CreateRecipientComponent,
    RecipientListComponent,
    HomeComponent,
    AppoinmentListComponent,
    CreateAppoinmentComponent,
    TransactionListComponent,
    AdminComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
