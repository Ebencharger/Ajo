import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidden=false;
  phonehide=false;
  hidemess:any;
  v:any;
  AJO:any;
  message:any;
  message2:any;
  showm=false;
  constructor(private fb:FormBuilder, private route:Router, public service:ServiceService,) { }
  forms=this.fb.group({phone:["", [Validators.required, Validators.pattern('^[+]{1}[0-9]{3}[0-9]{10}$')]], password:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]]})
  users=this.service.users;
  get phone(){
    if (this.forms.get('phone')?.invalid && this.forms.get('phone')?.touched && this.forms.get('phone')?.value!="INVALID PHONE NUMBER") {
      this.message="INVALID PHONE NUMBER";
    }
    return this.forms.get('phone');
  }
  get password(){
    return this.forms.get('password')
  }
  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      this.v=localStorage.getItem("AJO");
      this.AJO=JSON.parse(this.v)
     }
     else{
       this.AJO=[
         {admin:[{id:"AJO-ADMIN", password:"ajowill@2021"}], user:[]}
       ]
     }
  }
  disp(){
    this.hidden=this.service.hidden;
    this.route.navigate(['/gethelp'])
  }
  forpassword(){
    this.hidden=this.service.hidden;
    this.route.navigate(['/forgotpassword'])
  }
  register(){
    this.hidden=this.service.hidden;
    this.route.navigate(['/newuser'])
  }
  login(){
    let{phone, password}=this.forms.value;
    if (this.AJO[0].user!="") {
   for (let i = 0; i < this.AJO[0].user.length; i++) {
    console.log(this.AJO[0].user[i].phone);
    if (this.AJO[0].user[i].phone==phone&& this.AJO[0].user[i].password==password) {
      this.service.loginuser=this.AJO[0].user[i];
      this.service.id=i;
      if (this.AJO[0].user[i].driftplan!="") {
        this.service.amount=this.AJO[0].user[i].driftplan[0].amount;
      }
      console.log(this.service.loginuser);
      this.route.navigate(['/dashboard'])
      this.showm=true;
      setTimeout(() => {
        this.showm=false;
      }, 100);
      return;
    }
    else if (i==this.AJO[0].user.length-1 && this.AJO[0].user[i].phone==phone&& this.AJO[0].user[i].password!=password && this.showm==false) {
      this.forms.get('password')?.setValue([""]);
    }
    else if (this.AJO[0].user[i].phone!=phone && this.AJO[0].user[i].password==password) {
      this.forms.get('phone')?.setValue(["INVALID PHONE NUMBER!"]);
    }
    else if (this.AJO[0].user[i].phone!=phone && this.AJO[0].user[i].password!=password) {
      this.forms.get('phone')?.setValue(["INVALID PHONE NUMBER!"]);
      this.forms.get('password')?.setValue([""]);
    }
   }
    
   }
   else{
     console.log("heyyyy");
     
    this.forms.get('phone')?.setValue(["INVALID PHONE NUMBER!"]);
    this.forms.get('password')?.setValue([""]);
   }
  }
}
