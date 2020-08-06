import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
   error = null
   isloading = false
  @ViewChild('f') signinForm : NgForm
  constructor(private Route: Router, private authService:AuthService) { 
  }
  
  signupRequest(){
    this.Route.navigate(['signup'])
  }
  ngOnInit(): void {
  }
  onSubmit(){
    this.isloading = true
    if(!this.signinForm.valid){
      return
    }
    const email:string=this.signinForm.value.email
    const password:string=this.signinForm.value.password
    this.authService.onSignin(email,password).subscribe(
    res => {
      this.Route.navigate(['dashboard'])
      console.log("onSubmit",res)
      this.isloading = false
    }, 
    error => { 
      this.error=error.error.text
      this.isloading = false
    })
  }

}
