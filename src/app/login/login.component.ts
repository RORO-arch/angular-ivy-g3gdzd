import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   Username="Hello";
   password='';
   errormessage="InvalidLogin"
   flag=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  Login()
  {
    if((this.Username==="Hello")&&(this.password==="dummy"))
    {
      this.router.navigate(['welcome']);
      this.flag=false
    }
    else
    {
      this.flag=true;
    }
    
    
  }


}