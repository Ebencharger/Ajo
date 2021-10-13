import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-changeplan',
  templateUrl: './changeplan.component.html',
  styleUrls: ['./changeplan.component.scss']
})
export class ChangeplanComponent implements OnInit {
 myplan=0;
 showdis:any;
 timecount:any;
  constructor(public service:ServiceService, private route:Router, private fb:FormBuilder) { }
  forms=this.fb.group({type:["", [Validators.required]], drift:["", [Validators.required]], amount:["", Validators.required]});
  get type(){
    return this.forms.get('type')
  }
  get drift(){
    return this.forms.get('drift')
  }
  get amount(){
    return this.forms.get('amount')
  }
v:any;
AJO:any;
  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v=localStorage.getItem("AJO");
      this.AJO=JSON.parse(this.v);
    }
    this.timecount=this.AJO[0].user[this.service.id].driftplan;
  }
  changeme(params:any){
   if (this.myplan==3) {
    this.myplan+0
    console.log(this.myplan);
   }
   else{
    this.myplan++
    console.log(this.myplan);
   }

   if (this.timecount!="" && this.AJO[0].user[this.service.id].countyear==this.AJO[0].user[this.service.id].year) {
    this.myplan=0;
    console.log(this.myplan);
  }
  else if (this.timecount=="" && this.AJO[0].user[this.service.id].countyear==this.AJO[0].user[this.service.id].year) {
    this.myplan=this.myplan
  }  
  }
setup(){
  let{type,drift,amount}=this.forms.value;
  amount.substring(2);
  let drifttype={type:type, drift:drift, amount:amount}
  console.log(drifttype);
  this.AJO[0].user[this.service.id].time++
  this.service.amount=amount;
// this.route.navigate(['dashboard/'])
this.AJO[0].user[this.service.id].driftplan.push(drifttype);
localStorage.setItem("AJO",JSON.stringify(this.AJO))
this.showdis=true;
}

showme(){
  this.showdis=false;
  this.route.navigate(['dashboard'])
}

}
