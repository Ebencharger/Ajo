import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-drift',
  templateUrl: './drift.component.html',
  styleUrls: ['./drift.component.scss']
})
export class DriftComponent implements OnInit {

  mylast = "DOLLAR";
  array = [{ do: "DOLLAR", value: "$" }, { do: "EURO", value: "£" }, { do: "NAIRA", value: "#" }]
  show = false;
  curry: any;
  mybalance: any;
  showdis = false;
  showme = false;
  mustset: any;
  v: any;
  AJO: any;
  true = true;
  display = false;
  driftPlan = "";
  driftAmount = this.service.amount;
  dollar = "$"
  constructor(public service: ServiceService, private route: Router, private fb: FormBuilder) { }
  forms = this.fb.group({ driftt: [this.driftAmount, [Validators.required]] })
  get driftt() {
    return this.forms.get('driftt');
  }
  user: any = [];
  users: any;
  day: any;
  dayname:any;
  date = new Date;
  newmonth: any;
  newdate: any;
  acctime: any;
  balance: any;
  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v = localStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v);
    }
    console.log(this.driftAmount);
    if (this.AJO[0].user[this.service.id].driftplan == "") {
      this.mustset = true;
    }
    else {
      this.mustset = false;
    }
    this.dayname=this.service.dayarray[this.date.getDay()];
    this.curry = this.mylast;
    console.log(this.service.loginuser);
    this.users = this.service.loginuser;
    this.balance = this.AJO[0].user[this.service.id].balance;
    this.mybalance = this.AJO[0].bankaccount[0].balance;
    if (this.AJO[0].user[this.service.id].driftplan == "") {
      this.driftPlan = "";
    }
    else {
      this.driftPlan = this.AJO[0].user[this.service.id].driftplan[0].type + "-" + this.AJO[0].user[this.service.id].driftplan[0].drift;
    }

    if (this.date.getDate() < 10) {
      this.day = "0" + this.date.getDate();
    }
    else if (this.date.getDate() > 10) {
      this.day = this.date.getDate();
    }
    if (this.date.getMonth() < 10) {
      this.newmonth = "0" + (this.date.getMonth() + 1);
    }
    else if (this.date.getDate() >= 10) {
      this.newmonth = (this.date.getMonth()) + 1;
    }
    this.newdate = this.day + "-" + this.newmonth + "-" + this.date.getFullYear();
    this.acctime = this.date.getHours() + ":" + this.date.getMinutes();
    console.log(this.AJO[0].user[this.service.id].statement.length);

    if (this.AJO[0].user[this.service.id].driftplan != "") {
      if (this.AJO[0].user[this.service.id].driftplan[0].drift == "MONTHLY" && this.AJO[0].user[this.service.id].statement != "") {
        if (this.AJO[0].user[this.service.id].statement.length > 1) {
          if (((this.date.getMonth()+1)  != (Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(3,5))))  && ((this.date.getDate())  == (Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2))))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(3,5))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(3,5))));
          }
        }
        else if ((this.AJO[0].user[this.service.id].statement.length == 1)) {
       if (((this.date.getMonth()+1) != (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(3,5)))) && ((this.date.getDate())  == (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2)))) ) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(3,5))));
          }
          else if (((this.date.getMonth()+1)  == (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(3,5)))) && ((this.date.getDate())  == (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2))))) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(3,5))));
          }
        }
      }
      if (this.AJO[0].user[this.service.id].driftplan[0].drift == "WEEKLY" && this.AJO[0].user[this.service.id].statement != "") {
        if (this.AJO[0].user[this.service.id].statement.length > 1) {
          if ((this.date.getDate() != (Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2)))) && (this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].day==this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].checkday)) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2))));
          }
        }
        else if ((this.AJO[0].user[this.service.id].statement.length == 1)) {
          if ((this.date.getDate() != (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2)))) && (this.AJO[0].user[this.service.id].statement[0].day==this.AJO[0].user[this.service.id].statement[0].checkday)) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2))));
          }
          else if ((this.date.getDate() != (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2)))) && (this.AJO[0].user[this.service.id].statement[0].day!=this.AJO[0].user[this.service.id].statement[0].checkday)) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2))));
          }
        }
      }
      if (this.AJO[0].user[this.service.id].driftplan[0].drift == "DAILY" && this.AJO[0].user[this.service.id].statement != "") {
        if (this.AJO[0].user[this.service.id].statement.length > 1) {
          if (this.date.getDate() != (Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2)))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2))));
          }
          else {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[this.AJO[0].user[this.service.id].statement.length - 1].date.substring(0, 2))));
          }
        }
        else if ((this.AJO[0].user[this.service.id].statement.length == 1)) {
          if (this.date.getDate() != (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2)))) {
            this.mustset = false;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2))));
          }
          else if (this.date.getDate() == (Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2)))) {
            this.mustset = true;
            console.log((Number(this.AJO[0].user[this.service.id].statement[0].date.substring(0, 2))));
          }
        }
      }

    }
    else if (this.AJO[0].user[this.service.id].driftplan == "") {
      this.mustset = true;
    }
  }

  drift() {
    console.log(this.mybalance);
    let { driftt } = this.forms.value;
    if ((Number(this.mybalance)) > (Number(this.driftAmount * 520))) {
      let bal = (this.mybalance) - (Number(this.driftAmount * 520));
      let driftSta = { amountDrif: driftt, time: this.acctime, date: this.newdate, day:this.dayname, checkday:this.dayname};
      this.AJO[0].bankaccount[0].balance = bal;
      this.AJO[0].user[this.service.id].balance = (Number(driftt)) + this.AJO[0].user[this.service.id].balance;
      this.AJO[0].user[this.service.id].statement.push(driftSta);
      localStorage.setItem("AJO", JSON.stringify(this.AJO));
      this.route.navigate(['dashboard/balance'])
    }
    else {
      this.showdis = true;
      console.log("INSUFFICIENT FUND!");
    }
  }

  showmme() {
    this.showdis = false;
  }

}
