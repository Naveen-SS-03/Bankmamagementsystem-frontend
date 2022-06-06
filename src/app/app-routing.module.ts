import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './Account/account-list/account-list.component';
import { CreateAccountComponent } from './Account/create-account/create-account.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './Admin/admin-registration/admin-registration.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { LoginComponent } from './Admin/login/login.component';
import { RegistrationComponent } from './Admin/registration/registration.component';
import { AppoinmentListComponent } from './Appoinment/appoinment-list/appoinment-list.component';
import { CreateAppoinmentComponent } from './Appoinment/create-appoinment/create-appoinment.component';
import { CreateRecipientComponent } from './Recipient/create-recipient/create-recipient.component';
import { RecipientListComponent } from './Recipient/recipient-list/recipient-list.component';
import { CreateTransactionComponent } from './Transaction/create-transaction/create-transaction.component';
import { TransactionListComponent } from './Transaction/transaction-list/transaction-list.component';



const routes: Routes = [
  {path:'',
  redirectTo:'login',
  pathMatch:'full'},
  {path : 'login',
  component:LoginComponent},
  {path : 'AdminLogin',component:AdminLoginComponent},
  {path : 'registration',component:RegistrationComponent},
  {path : 'adminRegistration',component:AdminRegistrationComponent},
  {path : 'dashboard',component:DashboardComponent},

  {path: `dashboard/Account`, component: AccountListComponent},
  {path: `dashboard/Account/Account/create`, component: CreateAccountComponent},
  {path: '', redirectTo:`dashboard/Account/Account/getall`,pathMatch:'full'},
  
  {path: `dashboard/Transaction`, component: TransactionListComponent},
  {path: `dashboard/Transaction/Transaction/create`, component: CreateTransactionComponent},
  {path: '', redirectTo:`dashboard/Transaction/Transaction/getall`,pathMatch:'full'},

  {path: `dashboard/Recipient`, component: RecipientListComponent},
  {path: `dashboard/Recipient/Recipient/create`, component: CreateRecipientComponent},
  {path: '', redirectTo:`dashboard/Recipient/Recipient/getall`,pathMatch:'full'},
  
  {path: `dashboard/Appointment`, component: AppoinmentListComponent},
  {path: `dashboard/Appointment/Appointment/create`, component: CreateAppoinmentComponent},
  {path: '', redirectTo:`dashboard/Appoinment/Appointment/getall`,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
