import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
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
