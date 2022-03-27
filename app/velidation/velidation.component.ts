import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-velidation',
  templateUrl: './velidation.component.html',
  styleUrls: ['./velidation.component.css']
})
export class VelidationComponent implements OnInit {

   



  
  user:any={};

  submit()
  {
    alert(JSON.stringify(this.user));
    console.warn(this.user);
  }
  constructor(){}
  ngOnInit(): void {
  }

}
