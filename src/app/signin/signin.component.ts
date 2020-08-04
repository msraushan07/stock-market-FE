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

  @ViewChild('f') signinForm : NgForm
  constructor(private Route: Router, private authService:AuthService) { 
  }
  
  signupRequest(){
    this.Route.navigate(['signup'])
  }
  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.signinForm.valid){
      return
    }
    const email:string=this.signinForm.value.email
    const password:string=this.signinForm.value.password
    this.authService.onSignin(email,password).subscribe(res => console.log(res), err => { console.log(err)})
  }

}
