import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankingComponent } from './banking/banking.component';
import { CreditComponent } from './credit/credit.component';
import { EmiComponent } from './emi/emi.component';

import { VelidationComponent } from './velidation/velidation.component';

const routes: Routes = [
 
  {
    component:BankingComponent,path:'banking'
  },
  {
    component:EmiComponent,path:'emi'
  },
  {
    component:CreditComponent,path:'credit'
  },
  {
    component:VelidationComponent,path:'velidation'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
