import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

passwordhide=false;
constructor(private fb:FormBuilder, private route:Router, public service:ServiceService) { }
forms=this.fb.group({phone:["", [Validators.required, Validators.pattern('^[+]{1}[0-9]{3}[0-9]{10}$')]], password:["", [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,30}$')]]})
get phone(){
  return this.forms.get('phone');
}
get password(){
  return this.forms.get('password')
}
  ngOnInit(): void {
  }
  disp(){
    this.passwordhide=this.service.passwordhide;
    this.service.hiddentwo=false;
    this.route.navigate(['/gethelp'])
  }
  login(){
    this.passwordhide=this.service.passwordhide;
    this.service.hidden=false;
    this.route.navigate(['/login'])
  }
  register(){
    this.passwordhide=this.service.passwordhide;
    this.route.navigate(['/newuser'])
  }
  otp(){
    this.passwordhide=this.service.passwordhide;
  }
}
