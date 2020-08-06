import { Injectable , OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject,Subject} from 'rxjs'
import { tap } from 'rxjs/operators'
import {User} from '../shared/user.model'
@Injectable()
export class AuthService{
    user = new BehaviorSubject<User>(null)
    constructor(private _http: HttpClient){}
    
    private handleauthentication(id:string,name:string,email:string){
        const user1 = new User(id,name,email)
        this.user.next(user1)
    } 

    onSignup(name: string,email: string,contact: number, password:string){
        return this._http.post<any>('http://localhost:3000/signup',{ name, email, contact, password})
        .pipe(tap (res =>{
             this.handleauthentication(res.user._id,res.user.name,res.user.email)
           
        }))
    }
    onSignin(email:string,password:string){
        return this._http.post<any>('http://localhost:3000/signin',{email,password})
        .pipe(tap (res =>{
            this.handleauthentication(res.user._id,res.user.name,res.user.email)
           
        }))
    }
  
}
