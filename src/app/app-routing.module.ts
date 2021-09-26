import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { CashoutComponent } from './cashout/cashout.component';
import { ChangeplanComponent } from './changeplan/changeplan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DriftComponent } from './drift/drift.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GethelpComponent } from './gethelp/gethelp.component';
import { HelpComponent } from './help/help.component';
import { LinkbankComponent } from './linkbank/linkbank.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { SplashComponent } from './splash/splash.component';
import { StatementComponent } from './statement/statement.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"gethelp", component:GethelpComponent},
  {path:"forgotpassword", component:ForgotpasswordComponent},
  {path:"dashboard",component:DashboardComponent, children:[{path:"", component:BalanceComponent}, {path:"balance", component:BalanceComponent}, {path:"drift", component:DriftComponent},{path:"changeplan", component:ChangeplanComponent}, {path:"linkbank", component:LinkbankComponent}, {path:"cashout",component:CashoutComponent}, {path:"statement", component:StatementComponent}, {path:"transaction", component:TransactionComponent}, {path:"help", component:HelpComponent}]},
  {path:"splash", component:SplashComponent},
  {path:"newuser", component:NewuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
