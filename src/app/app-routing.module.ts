import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { CreditCreditcardComponent } from './pages/credit-creditcard/credit-creditcard.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { OutlineComponent } from './pages/outline/outline.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'users', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'outline', component: OutlineComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'account', component: AccountComponent },
  { path: 'credit-card', component: CreditCreditcardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
