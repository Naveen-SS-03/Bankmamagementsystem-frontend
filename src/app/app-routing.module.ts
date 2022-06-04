import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './Account/account-list/account-list.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { AppoinmentListComponent } from './Appoinment/appoinment-list/appoinment-list.component';
import { CreateAppoinmentComponent } from './Appoinment/create-appoinment/create-appoinment.component';
import { CreateRecipientComponent } from './Recipient/create-recipient/create-recipient.component';
import { RecipientListComponent } from './Recipient/recipient-list/recipient-list.component';
import { CreateTransactionComponent } from './Transaction/create-transaction/create-transaction.component';
import { TransactionListComponent } from './Transaction/transaction-list/transaction-list.component';



const routes: Routes = [
  {path: `Account`, component: AccountListComponent},
  {path: `Account/Account/create`, component: CreateAccountComponent},
  {path: '', redirectTo:`Account/Account/getall`,pathMatch:'full'},
  
  {path: `Transaction`, component: TransactionListComponent},
  {path: `Transaction/Transaction/create`, component: CreateTransactionComponent},
  {path: '', redirectTo:`Transaction/Transaction/getall`,pathMatch:'full'},

  {path: `Recipient`, component: RecipientListComponent},
  {path: `Recipient/Recipient/create`, component: CreateRecipientComponent},
  {path: '', redirectTo:`Recipient/Recipient/getall`,pathMatch:'full'},
  
  {path: `Appointment`, component: AppoinmentListComponent},
  {path: `Appointment/Appointment/create`, component: CreateAppoinmentComponent},
  {path: '', redirectTo:`Appoinment/Appointment/getall`,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
