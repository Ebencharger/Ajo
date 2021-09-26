import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})
export class StatementComponent implements OnInit {
   v:any;
   AJO:any;
  constructor(public service:ServiceService) { }

  ngOnInit(): void {
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v=localStorage.getItem("AJO");
      this.AJO=JSON.parse(this.v);
    }
  }

}
