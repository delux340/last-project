import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './appRouting/app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { FirstSignUpFormComponent } from './components/first-sign-up-form/first-sign-up-form.component';
import { SecondSignUpFormComponent } from './components/second-sign-up-form/second-sign-up-form.component';
import { HomeComponent } from './components/home/home.component'



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    NavbarComponent,
    FirstSignUpFormComponent,
    SecondSignUpFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
