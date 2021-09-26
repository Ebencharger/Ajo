import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-linkbank',
  templateUrl: './linkbank.component.html',
  styleUrls: ['./linkbank.component.scss']
})
export class LinkbankComponent implements OnInit {
  myplan=0;
  showdis=false;
  text:any;
  link=false;
  spin:any;
  disable:any;
  timecount:any;
   constructor(public service:ServiceService, private route:Router, private fb:FormBuilder) { }
   forms=this.fb.group({bankaccount:["", [Validators.required, Validators.pattern('^[0-9]{10}$')]], bankname:["", [Validators.required,Validators.pattern('^[A-Za-z]{2,30}$')]], accounttype:["", [Validators.required]]});
   get bankaccount(){
     return this.forms.get('backaccount')
   }
   get bankname(){
     return this.forms.get('bankname')
   }
   get accounttype(){
     return this.forms.get('accounttype')
   }
 v:any;
 AJO:any;
   ngOnInit(): void {
     if (localStorage.getItem("AJO")) {
       console.log("YES");
       this.v=localStorage.getItem("AJO");
       this.AJO=JSON.parse(this.v);
     }
     this.timecount=this.AJO[0].user[this.service.id].time;
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
  //   if (this.timecount!=4) {
  //    this.myplan=0;
  //    console.log(this.myplan);
  //  }
  //  else if (this.timecount==4) {
  //    this.myplan=this.myplan
  //  }
     
   }
 setup(){
 this.link=true;
 this.AJO[0].user[this.service.id].link=this.link;
 localStorage.setItem("AJO",JSON.stringify(this.AJO))
 this.showdis=true;
 this.text="ACCOUNT IS LINKED SUCCESSFULLY"
 }
 
 showme(){
   this.showdis=false;
 }
 confirm(){
   let {bankaccount, bankname}=this.forms.value
  this.text="PLEASE WAIT";
  this.spin=true;
  this.disable=true;
   this.showdis=true;
   console.log(bankaccount.toUpperCase(), this.AJO[0].bankaccount[0].name, bankname, this.AJO[0].bankaccount[0].account);
   
   if (bankaccount==this.AJO[0].bankaccount[0].account && bankname.toUpperCase()==this.AJO[0].bankaccount[0].name) {
    setTimeout(() => {
      this.text="ACCOUNT IS CONFIRMED,LINK YOUR ACCOUNT"
      this.spin=false;
      this.disable=false;
       this.check();
     }, 5000);
   }
   else{
    setTimeout(() => {
      this.text="ACCOUNT IS NOT CONFIRMED, TRY AGAIN"
      this.spin=false;
      this.disable=false;
     }, 5000);
   }
   
 }

 change(){
   console.log(this.forms);
   console.log("hello"); 
 }

 check(){
   if (this.AJO[0].user[this.service.id].link==false) {
    this.link=true;
   }
   else if(this.AJO[0].user[this.service.id].link==true){
    this.link=false;
   }
 }
 }
