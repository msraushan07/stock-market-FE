import { Component, OnInit , OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[AuthService]
})
export class HeaderComponent implements OnInit , OnDestroy{
  isAuthenticated = false
  userSub : Subscription
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    console.log("header")
       this.userSub=this.authService.user.subscribe(user => {
       this.isAuthenticated = !!user;
       console.log("header subscribe",user)
       console.log(!!user)
    })
  }
  ngOnDestroy(){
       this.userSub.unsubscribe()
  }
}
