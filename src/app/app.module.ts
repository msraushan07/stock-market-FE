import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import {HomeComponent} from './home/home.component'
import {HttpClientModule} from '@angular/common/http'
import {DropDownDirective} from './shared/dropdown.directive'
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component'

const appRoutes : Routes = [
  { path: "" , component: HomeComponent},
  { path: "dashboard" , component: DashboardComponent},
  { path: "signin" , component: SigninComponent},
  { path: "signup" , component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    DropDownDirective,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
