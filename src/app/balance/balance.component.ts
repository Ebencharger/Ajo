import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  mylast = "DOLLAR";
  array = [{ do: "DOLLAR", value: "$" }, { do: "EURO", value: "£" }, { do: "NAIRA", value: "#" }]
  show = false;
  curry: any;
  showme = false;
  display = false;
  v:any;
  AJO:any;
  dollar = "$"
  constructor(public service: ServiceService) { }
  user:any=[];
  users:any;
  balance:any;
  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v=localStorage.getItem("AJO");
      this.AJO=JSON.parse(this.v);
    }
    this.curry = this.mylast;
    console.log(this.service.loginuser);
    this.users=this.service.loginuser;
    this.balance = this.AJO[0].user[this.service.id].balance;
  }

  spinner() {
    this.show = true;
    this.display = true;
    console.log(this.service.loginuser.balance);
    
    setTimeout(() => {
      this.show = false;
      this.display = false;
      this.balance = this.balance;
    }, 4000);
  }

  curr() {
    if (this.curry == "EURO" && this.mylast == "DOLLAR") {
      this.balance = Math.round(this.balance * (1.06));
    }
    else if (this.curry == "DOLLAR" && this.mylast == "NAIRA") {
      this.balance = Math.round(this.balance * 520);
    }
    else if (this.curry == "DOLLAR" && this.mylast == "EURO") {
      this.balance = Math.round(this.balance / 1.06);
    }
    else if (this.curry == "NAIRA" && this.mylast == "DOLLAR") {
      this.balance = Math.round(this.balance / 520);
    }
    else if (this.curry == "NAIRA" && this.mylast == "EURO") {
      this.balance = Math.round(this.balance / 551);
    }
    else if (this.curry == "EURO" && this.mylast == "NAIRA") {
      this.balance = Math.round(this.balance * 551);
    }
    for (let i = 0; i < this.array.length; i++) {
      console.log(this.mylast);
      if (this.mylast == this.array[i].do) {
        this.dollar = "";
        this.dollar = this.array[i].value;
        console.log(this.array[i].do, this.dollar);
        this.showme = true;
        setTimeout(() => {
          this.showme = false;
        }, 5000);
        return;
      }
      else if (i == this.array.length - 1 && this.showme == false) {
        this.dollar = "$";
        console.log(this.array[i].do, this.dollar);
      }

    }
  }
  choose() {
    this.curry = this.mylast;
    console.log(this.curry);
  }


}
