import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  date=new Date;
  AJO:any;
  year=this.date.getFullYear();
  constructor(private route:Router) { }
  hidden = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.hidden = true;
     this.route.navigate(['/login'])
    }, 1000);

    if (localStorage.getItem("AJO")) {
      console.log("YES");
    }
    else{
      this.AJO=[
        {userct:0,bankaccount:[{account:"1500680328", name:"HERITAGE", balance:50000}], admin:[{id:"AJO-ADMIN", password:"ajowill@2021"}], user:[]}
      ]
      localStorage.setItem("AJO", JSON.stringify(this.AJO));
    }

    
   
  }

}
