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
        console.log(user1)  
        localStorage.setItem('userData',JSON.stringify(user1))
    }  

    onSignup(name: string,email: string,contact: number, password:string){
        return this._http.post<any>('http://localhost:3000/signup',{ name, email, contact, password})
        .pipe(tap (res =>{
             this.handleauthentication(res._id,res.name,res.email,res.token)
           
        }))
    }
    onSignin(email:string,password:string){
        return this._http.post<any>('http://localhost:3000/signin',{email,password})
        .pipe(tap (res =>{
            this.handleauthentication(res._id,res.name,res.email,res.token)
           
        }))
    }

    logout(){
        this.user.next(null)
        this.route.navigate(['signin'])
    }

    autologin(){
        const userData: {
            email:string,
            id:string,
            name:string,
            _token:string
        } = JSON.parse(localStorage.getItem('userData'))
        if(!userData){
            return;
        }
       const loadData = new User(userData.email,userData.id,userData.name,userData._token)
       if(loadData.token){
           this.user.next(loadData)
       }
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
