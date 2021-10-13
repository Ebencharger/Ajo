import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit {
  passwor: any = "Password";
  confirmpasswor: any = "Confirm Password";
  surnam: any;
  showdis = false;
  shown = false;
  me1: any;
  me2: any;
  othernam: any;
  v: any;
  usercount: any;
  date = new Date;
  day: any;
  user: any = [];
  newmonth: any;
  newdate: any;
  acctime: any;
  AJO: any;
  placeholder: any;
  emai: any;
  countr: any;
  newuser: any;
  phon: any;
  hidden = false;
  constructor(private fb: FormBuilder, private route: Router, public service: ServiceService) { }
  forms = this.fb.group({ phone: ["", [Validators.required, Validators.pattern('^[+]{1}[0-9]{3}[0-9]{10}$')]], password: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]], surname: ["", [Validators.required]], othername: ["", [Validators.required]], country: ["", [Validators.required, Validators.pattern('^[A-Za-z]{1,50}')]], confirmpassword: ["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]], email: ["", [Validators.required, Validators.email]] })
  get surname() {
    if (this.forms.get('surname')?.invalid && this.forms.get('surname')?.touched) {
      this.surnam = "SORRY! IT CAN'T BE THIS";
    }
    return this.forms.get('surname');
  }
  get othername() {
    if (this.forms.get('othername')?.invalid && this.forms.get('othername')?.touched) {
      this.othernam = "SORRY! IT CAN'T BE THIS";
    }
    return this.forms.get('othername');
  }
  get email() {
    if (this.forms.get('email')?.invalid && this.forms.get('email')?.touched) {
      this.emai = "SORRY! IT CAN'T BE THIS";
    }
    return this.forms.get('email');
  }
  get country() {
    if (this.forms.get('country')?.invalid && this.forms.get('country')?.touched) {
      this.countr = "SORRY! IT CAN'T BE THIS";
    }
    return this.forms.get('country');
  }
  get phone() {
    if (this.forms.get('phone')?.invalid && this.forms.get('phone')?.touched) {
      this.phon = "SORRY! IT CAN'T BE THIS";
    }
    return this.forms.get('phone');
  }
  get password() {
    return this.forms.get('password');
  }
  get confirmpassword() {
    return this.forms.get('confirmpassword');
  }
  ngOnInit(): void {
    // this.service.getFruits().subscribe(data=>{
    //   this.placeholder=data;
    // })
    if (localStorage.getItem("AJO")) {
      this.v = localStorage.getItem("AJO");
      this.AJO = JSON.parse(this.v)
    }
    else {
      this.AJO = [
        { admin: [{ id: "AJO-ADMIN", password: "ajowill@2021" }] }
      ]
    }
    console.log(this.AJO);
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
    this.newmonth = this.newmonth;
    this.day = this.day;
    this.newdate = this.day + "-" + this.newmonth + "-" + this.date.getFullYear();
    this.acctime = this.date.getHours() + ":" + this.date.getMinutes();
    this.service.date = this.newdate;
    this.service.time = this.acctime;
    console.log(this.service.date, this.service.time);

  }
  disp() {
    this.hidden = this.service.hidden;
    this.route.navigate(['/gethelp'])
  }
  forpassword() {
    this.hidden = this.service.hidden;
    this.route.navigate(['/forgotpassword'])
  }
  login() {
    this.hidden = this.service.hidden;
    this.route.navigate(['/login'])
  }

  register() {
    this.usercount = this.AJO[0].userct;
    this.AJO[0].userct = this.usercount + 1;
    let { surname, othername, email, phone, country, password } = this.forms.value;
    let acr = country.substr(0, 3).toUpperCase();
    let uniq = "AJO"
    this.newuser = { id: uniq + "-" + acr + "-" + "00" + (this.usercount + 1), time: 0, surname: surname, othername: othername, email: email, phone: phone, country: country, password: password, timereg: this.service.time, datereg: this.service.date, balance: 0, regbalance: 0, driftplan: [], statement: [], transaction: [], link: false, day: this.day, countday: this.day, month:this.newmonth, countmonth: this.newmonth, year: this.date.getFullYear(), countyear: this.date.getFullYear() }
    this.user = this.newuser;
    this.AJO[0].user.push(this.user);
    localStorage.setItem("AJO", JSON.stringify(this.AJO))
    this.showdis = true;
  }
  check() {
    let { phone } = this.forms.value;
    for (let i = 0; i < this.AJO[0].user.length; i++) {
      if (this.AJO[0].user[i].phone == phone) {
        this.me1 = this.AJO[0].user[i].phone;
        this.phon = "";
        this.phon = "PHONE ALREADY EXISTED!";
        this.shown = true;
        setTimeout(() => {
          this.shown = false;
        }, 100);
      }
      else if (i == this.AJO[0].user.length - 1 && this.shown == false) {
        this.phon = phone;
      }
    }
  }
  check2() {
    let { email } = this.forms.value;
    for (let i = 0; i < this.AJO[0].user.length; i++) {
      if (this.AJO[0].user[i].email == email) {
        this.me2 = this.AJO[0].user[i].email;
        this.emai = "";
        this.emai = "EMAIL ALREADY EXISTED!";
        this.shown = true;
        setTimeout(() => {
          this.shown = false;
        }, 100);
      }
      else if (i == this.AJO[0].user.length - 1 && this.shown == false) {
        this.emai = email;
      }
    }
  }

  showme() {
    this.hidden = this.service.hidden;
    this.showdis = false;
    this.route.navigate(['/login'])
  }
}
