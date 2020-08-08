import {Injectable, Injector} from '@angular/core'
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http'
import { AuthService } from './auth.service'
import { take, exhaustMap } from 'rxjs/operators'

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private injector: Injector){}
    
    intercept(req: HttpRequest<any>, next: HttpHandler){
        let authService = this.injector.get(AuthService)
       return  authService.user.pipe(take(1),
       exhaustMap(user => {
           console.log("Interceptor",user)
           if(!user){
               return next.handle(req)
           }
           const modifiedReq = req.clone({
                   setHeaders: {
                       Authorization: `Bearer ${user.token}`
                   }
           })
           return next.handle(modifiedReq)
       })) 
    }
} 