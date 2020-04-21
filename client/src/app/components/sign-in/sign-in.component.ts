import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { UsersService } from "../../services/users/users.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', "../sign-up/sign-up.component.css"]
})
export class SignInComponent implements OnInit {
  signInForm
  constructor(public formBuilder: FormBuilder, public userService: UsersService,public router:Router) {
    this.signInForm = this.formBuilder.group({
      email: "",
      password: ""
    })
  }

  ngOnInit() {
  }
  userLogin() {
    const { value } = this.signInForm
    this.userService.login(value).subscribe((res) => {
      const { token } = res
      localStorage.setItem("token", token)
      if(token) this.router.navigate(['home'])
    })
  }
}
