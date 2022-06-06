import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './Account/account-list/account-list.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipientListComponent } from './Recipient/recipient-list/recipient-list.component';
import { CreateRecipientComponent } from './Recipient/create-recipient/create-recipient.component';
import { CreateAppoinmentComponent } from './Appoinment/create-appoinment/create-appoinment.component';
import { AppoinmentListComponent } from './Appoinment/appoinment-list/appoinment-list.component';
import { CreateTransactionComponent } from './Transaction/create-transaction/create-transaction.component';
import { TransactionListComponent } from './Transaction/transaction-list/transaction-list.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './Admin/admin-registration/admin-registration.component';
import { LoginComponent } from './Admin/login/login.component';
import { RegistrationComponent } from './Admin/registration/registration.component';
import { FooterComponent } from './Admin/footer/footer.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AccountListComponent,
    CreateTransactionComponent,
    CreateRecipientComponent,
    RecipientListComponent,
    AppoinmentListComponent,
    CreateAppoinmentComponent,
    TransactionListComponent,
    LoginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    DashboardComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
