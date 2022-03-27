import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BankingComponent } from './banking/banking.component';
import { EmiComponent } from './emi/emi.component';
import { CreditComponent } from './credit/credit.component';
import { VelidationComponent } from './velidation/velidation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    
    BankingComponent,
    EmiComponent,
    CreditComponent,
    VelidationComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
