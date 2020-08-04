import { Injectable , OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable()
export class AuthService{
    constructor(private _http: HttpClient){}
    onSignup(name: string,email: string,contact: number, password:string){
        return this._http.post<any>('http://localhost:3000/signup',{ name, email, contact, password})
    }
    onSignin(email:string,password:string){
        return this._http.post<any>('http://localhost:3000/signin',{email,password})
    }
}
