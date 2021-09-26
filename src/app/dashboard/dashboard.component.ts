import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router, public service:ServiceService) { }
  id:any;
  date=new Date;
  day:any;
  users=this.service.loginuser;
  AJO:any;
  v:any;
  user:any=[];
  newmonth:any;
  showdis:any;
  dayname:any;
  balance:any;
  count=0;
  show:any;
  mymenu=true;
  username:any;
  newdate:any;
  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v=localStorage.getItem("AJO");
      this.AJO=JSON.parse(this.v);
    }
    if (this.date.getFullYear()-this.AJO[0].user[this.service.id].year>=1) {
      let link=false;
      this.AJO[0].user[this.service.id].link=link;
      localStorage.setItem("AJO", JSON.stringify(this.AJO))
    }
    if (this.date.getDate()<10) {
      this.day="0"+this.date.getDate();
    }
    this.day=this.date.getDate();
   if (this.date.getMonth()<10) {
     this.newmonth="0"+(this.date.getMonth()+1);   
   }
   this.dayname=this.service.dayarray[this.date.getDay()];
  
   if (this.AJO[0].user[this.service.id].statement.length==1) {
     console.log("hoooo");
    this.AJO[0].user[this.service.id].statement[0].checkday=this.dayname;
    localStorage.setItem("AJO", JSON.stringify(this.AJO));
   }
   else if (this.AJO[0].user[this.service.id].statement.length>1) {
     console.log("ahhhhhhhhhh");
    this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length-1].checkday=this.dayname;
    localStorage.setItem("AJO", JSON.stringify(this.AJO));
   }
   

   this.newmonth=this.date.getMonth()+1;
    this.newdate=this.day+"-"+this.newmonth+"-"+this.date.getFullYear();
    this.id=this.users.id;
    this.username=this.service.loginuser.surname+" "+ this.service.loginuser.othername;
     setTimeout(() => {
      if (this.users.time==0) {
        this.showdis=true;
      }
      else{
        this.showdis=false;
      }
     }, 2000);
     if (this.date.getDay()==((this.AJO[0].user[this.service.id].countday+1) || (this.date.getDay()!=this.AJO[0].user[this.service.id].countday))) {
      this.AJO[0].user[this.service.id].countday=this.AJO[0].user[this.service.id].countday+1;
      localStorage.setItem("AJO", JSON.stringify(this.AJO));
     }
     if (this.date.getMonth()==((this.AJO[0].user[this.service.id].countmonth+1) || (this.date.getMonth()!=this.AJO[0].user[this.service.id].countmonth))) {
      this.AJO[0].user[this.service.id].countmonth= this.AJO[0].user[this.service.id].countmonth+1
      localStorage.setItem("AJO", JSON.stringify(this.AJO));
     }
     if (this.date.getFullYear()==((this.AJO[0].user[this.service.id].countday+1) || (this.date.getFullYear()!=this.AJO[0].user[this.service.id].countyear))) {
      this.AJO[0].user[this.service.id].countyear= this.AJO[0].user[this.service.id].countyear+1;
      localStorage.setItem("AJO", JSON.stringify(this.AJO));
     }
  }
  
  menu(){
    this.count++
    this.count==1?this.mymenu=false:[this.mymenu=true, this.count=0]
  }

  wallet(){
  this.mymenu=true;
  this.count=0;
  this.route.navigate(['dashboard/balance'])
  }
  logout(){
    this.mymenu=true;
    this.count=0;
    this.show=true;
    this.route.navigate(['/splash'])
  }

  drift(){
    this.mymenu=true;
  this.count=0;
  this.route.navigate(['dashboard/drift'])
  }

  showme(){
    this.showdis=false;
    this.AJO[0].user[this.service.id].time++
    localStorage.setItem("AJO", JSON.stringify(this.AJO));
  }
  changeplan(){
    this.mymenu=true;
    this.count=0;
    this.route.navigate(['dashboard/changeplan'])
  }
  link(){
    this.mymenu=true;
    this.count=0;
    this.route.navigate(['dashboard/linkbank'])
  }
  cashout(){
    this.mymenu=true;
    this.count=0;
    this.route.navigate(['dashboard/cashout'])
  }
  
}
