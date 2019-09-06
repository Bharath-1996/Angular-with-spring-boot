import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username=''
  password=''
  errorMessage='invalid credentials'
  invalidLogin=false
  //Router Dependency injection
  constructor( private router:Router,private hardcodedAuthenticationservice:HardcodedAuthenticationService) { }
  

  ngOnInit() {
  }
  handleLogin()
  {
    // console.log(this.username);
    //if(this.username==='bharath' && this.password==='bharath@')
    if(this.hardcodedAuthenticationservice.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      this.errorMessage='valid crds'
      this.invalidLogin=true
    }
    else{
      this.errorMessage='invalid creds'
      this.invalidLogin=true
    }
  }

}
