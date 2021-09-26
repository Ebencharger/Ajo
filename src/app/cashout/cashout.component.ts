import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cashout',
  templateUrl: './cashout.component.html',
  styleUrls: ['./cashout.component.scss']
})
export class CashoutComponent implements OnInit {

  myplan=0;
  showdis=false;
  text:any;
  spin:any;
  see:any;
  date=new Date();
  disable:any;
  timecount:any;
  dollar = "$"
  v:any;
  day:any;
  newmonth:any;
  newdate:any;
  acctime:any;
  AJO:any;
  balance:any;
   constructor(public service:ServiceService, private route:Router, private fb:FormBuilder) { }
   forms=this.fb.group({cashout:["", [Validators.required, Validators.pattern('^[0-9]{1,500}$')]]});
   get cashout(){
     return this.forms.get('cashout')
   }

   ngOnInit(): void {
    if (this.date.getDate()<10) {
      this.day="0"+this.date.getDate();
    }
    else if (this.date.getDate()>10) {
      this.day=this.date.getDate();
    }
   if (this.date.getMonth()<10) {
     this.newmonth="0"+(this.date.getMonth()+1);   
   } 
   else if (this.date.getDate()>=10) {
     this.newmonth=(this.date.getMonth())+1; 
   }    
    this.newdate=this.day+"-"+this.newmonth+"-"+this.date.getFullYear();
    this.acctime=this.date.getHours()+":"+this.date.getMinutes();

     if (localStorage.getItem("AJO")) {
       console.log("YES");
       this.v=localStorage.getItem("AJO");
       this.AJO=JSON.parse(this.v);
     }
     this.timecount=this.AJO[0].user[this.service.id].time;
     this.balance = this.AJO[0].user[this.service.id].balance;

     if (this.AJO[0].user[this.service.id].driftplan[0].type=="YEARLY") {
       console.log(1); 
       if (this.date.getFullYear()-(Number(this.AJO[0].user[this.service.id].countyear))==1) {
         this.see=false;
       }
       else{
         this.see=true;
       }
     }
     if (this.AJO[0].user[this.service.id].driftplan[0].type=="MONTHLY") {
      console.log(1); 
       if (this.AJO[0].user[this.service.id].countmonth-this.AJO[0].user[this.service.id].month==1) {
         this.see=false;
       }
       else{
         this.see=true;
       }
     }
     if (this.AJO[0].user[this.service.id].driftplan[0].type=="WEEKLY") {
      console.log(1); 
       if (this.AJO[0].user[this.service.id].countday-this.AJO[0].user[this.service.id].day==7) {
         this.see=false;
       }
       else{
         this.see=true;
       }
     }
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
   }
 setup(){
  this.showdis=true;
  this.text="PLEASE WAIT..."
  this.check();
  this.spin=true;
  this.disable=true;
 }
 
 showme(){
   this.showdis=false;
 }

 check(){
  let{cashout}=this.forms.value;
  console.log(cashout);
  
   if ((Number(cashout))<=(Number(this.balance-(this.balance * 0.10)))) {
    setTimeout(() => {
      this.text=cashout+" is cashout! Wait for alert from your bank..."
      this.spin=false;
      this.disable=false;  
      this.balance=(Number(this.balance))-(Number(cashout));
      this.AJO[0].bankaccount[0].balance=(this.AJO[0].bankaccount[0].balance*520)+(Number(cashout));
      this.AJO[0].user[this.service.id].year=this.date.getFullYear();
      this.AJO[0].user[this.service.id].countyear=this.date.getFullYear();
      this.AJO[0].user[this.service.id].month=this.date.getMonth();
      this.AJO[0].user[this.service.id].countmonth=this.date.getMonth();
      this.AJO[0].user[this.service.id].day=this.date.getDate();
      this.AJO[0].user[this.service.id].countday=this.date.getDate();
      this.AJO[0].user[this.service.id].balance=this.balance;
      let sendTran={amount:cashout, time:this.acctime, date:this.newdate};
      this.AJO[0].user[this.service.id].transaction.push(sendTran);
      localStorage.setItem("AJO", JSON.stringify(this.AJO))
     }, 5000);
   }
   else{
    setTimeout(() => {
      this.text="TRY LESSER AMOUNT!"
      this.spin=false;
      this.disable=false;  
      let but=false;
     }, 5000);
   }
 }

}
