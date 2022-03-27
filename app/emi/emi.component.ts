import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {
 

  amount:any=0;
  roi:any=0;
  tenure:any=0;
  totalA:any=0;
  
  getData(){
   
    let RI= this.roi/1200;
    let PM = Math.pow((1+RI), this.tenure*12);

    let EMI = Math.round(this.amount*RI*PM/(PM - 1));
    return this.totalA = EMI *12;
    
  }
  
  
  constructor() { }

  ngOnInit(): void { }

}
