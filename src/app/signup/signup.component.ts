import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: []
})
export class SignupComponent implements OnInit {
  isloading = false
  @ViewChild('f') signupForm: NgForm
  constructor(private authService:AuthService, private Route:Router) { }
  error:string = null;
  ngOnInit(): void {
  }
  onSubmit(){
    this.isloading = true
    if(!this.signupForm.valid){
      return
    }
    const name:string=this.signupForm.value.name
    const email:string=this.signupForm.value.email
    const contact:number=this.signupForm.value.contact
    const password:string=this.signupForm.value.password
    console.log(name)
    this.authService.onSignup(name,email,contact,password).subscribe(resdata => 
      {
        console.log(resdata)
        this.Route.navigate(['dashboard'])
        this.isloading = false
      }, error =>{
        this.error=error.error.text
        this.isloading = false
      })
  }

}
