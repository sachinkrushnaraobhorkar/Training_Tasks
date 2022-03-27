import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  CreateAcc:any=0;
  DWamount:any=0;
  Create(): any
  {
     if(this.CreateAcc==0)
       {alert("You Dont have any Account Create Account ");}
      else if(this.CreateAcc<500)
      {
        alert("For Creating Account Put grater then 500 RS.");
      }
      else{
        alert("Account Successfully Created");
      }

   }
   
   Withdrow():any{
           
       if(this.DWamount>this.CreateAcc)
       {
         alert(" In Sufficent Balance !! Try Agen");
       }
       else {
         this.DWamount=this.CreateAcc-this.DWamount;
       this.CreateAcc=this.DWamount;
       }
     
   }
  
   Deposit():any{
   
    
      this.DWamount=this.CreateAcc+this.DWamount;
      this.CreateAcc=this.DWamount;
    }
   


}
