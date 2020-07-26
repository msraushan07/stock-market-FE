import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signinForm : NgForm
  constructor(private Route: Router) { 
  }
  
  signupRequest(){
    this.Route.navigate(['signup'])
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signinForm)
  }

}
