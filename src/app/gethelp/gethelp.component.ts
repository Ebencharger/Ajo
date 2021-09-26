import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-gethelp',
  templateUrl: './gethelp.component.html',
  styleUrls: ['./gethelp.component.scss']
})
export class GethelpComponent implements OnInit {
 newhide:any;
  constructor(public service:ServiceService, private route:Router) { }
  ngOnInit(): void {
  }
  login(){
    this.newhide=this.service.hiddentwo;
    this.service.hidden=false;
    this.route.navigate(['/login'])
  }
  forpassword(){
    this.newhide=this.service.hiddentwo;
    this.route.navigate(['/forgotpassword'])
  }
  register(){
    this.newhide=this.service.hiddentwo;
    this.route.navigate(['/newuser'])
  }
}
