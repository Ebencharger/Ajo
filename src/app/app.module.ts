import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GethelpComponent } from './gethelp/gethelp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewuserComponent } from './newuser/newuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BalanceComponent } from './balance/balance.component';
import { ButtonComponent } from './button/button.component';
import { DriftComponent } from './drift/drift.component';
import { ChangeplanComponent } from './changeplan/changeplan.component';
import { LinkbankComponent } from './linkbank/linkbank.component';
import { CashoutComponent } from './cashout/cashout.component';
import { StatementComponent } from './statement/statement.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    LoginComponent,
    GethelpComponent,
    ForgotpasswordComponent,
    NewuserComponent,
    DashboardComponent,
    BalanceComponent,
    ButtonComponent,
    DriftComponent,
    ChangeplanComponent,
    LinkbankComponent,
    CashoutComponent,
    StatementComponent,
    TransactionComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
