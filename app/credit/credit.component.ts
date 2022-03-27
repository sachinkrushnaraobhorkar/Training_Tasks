import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
   sal:number=0;
  card:string='';
  
  check()
  {
    if(this.sal<20000)
    {
      this.card="No Card ";
      return this.card;
    }
    else if(this.sal>20000 && this.sal<40000)
    {
      this.card="Silver";
      return this.card;
    }
    else if(this.sal>40000 && this.sal<60000)
    {
       this.card="Gold";
      return this.card;
      
    }
    else
    {
      this.card="Platinum";
      return this.card;
    }
  }




}
