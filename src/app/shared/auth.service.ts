import { Injectable , OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { BehaviorSubject,Subject} from 'rxjs'
import { catchError,tap } from 'rxjs/operators'
import {throwError} from 'rxjs';
import {User} from '../shared/user.model'
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root',
  })
export class AuthService{
    constructor(private _http: HttpClient,private route: Router){}
    user = new BehaviorSubject<User>(null)

    private handleauthentication(id:string,name:string,email:string,token:string){
        const user1 = new User(id,name,email,token)
        this.user.next(user1)    
        localStorage.setItem('userData',JSON.stringify(user1))
    }  

    onSignup(name: string,email: string,contact: number, password:string){
        return this._http.post<any>('http://localhost:3000/signup',{ name, email, contact, password})
        .pipe(tap (res =>{
             this.handleauthentication(res.user._id,res.user.name,res.user.email,res.user.token)
           
        }))
    }
    onSignin(email:string,password:string){
        return this._http.post<any>('http://localhost:3000/signin',{email,password})
        .pipe(tap (res =>{
            this.handleauthentication(res.user._id,res.user.name,res.user.email,res.user.token)
           
        }))
    }

    logout(){
        this.user.next(null)
        this.route.navigate(['signin'])
    }

  

    private handleError(errorRes: HttpErrorResponse){
        let errorMessage = 'An unknown Error Occured'
        if(!errorRes.error || !errorRes.error.error){
            return throwError(errorMessage)      
        } 
        switch(errorRes.error.error.text){
            case 'Email is incorrect or not registered':
                errorMessage = 'Email is incorrect or not registered'
            case 'Invalid Password':
                errorMessage = "Invalid Password"
        }
        return throwError(errorMessage)
}
  
}
