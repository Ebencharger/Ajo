import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {retry,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  option:any;
  passwordhide=true;
  hidden=true;
  v:any;
  dayarray=["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  id:any;
  date:any;
  time:any;
  hide=true;
  amount:any;
  loginuser:any=[];
  users:any;
  phoneinv="INVALID PHONE FILLED!"
  hiddentwo=true;
  hiddenthree=true;
  constructor(private http:HttpClient) { 
    if (localStorage.getItem("AJO")) {
      console.log("YES");
      this.v=localStorage.getItem("AJO");
      this.users=JSON.parse(this.v);
    }
    // this.amount=this.loginuser[0].driftplan[0].amount;
  }
  getFruits(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(retry(5),catchError(this.handles))
  }
  handles(error:HttpErrorResponse):any{
    alert("ERROR")
  }
}
