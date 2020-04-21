import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { UsersService } from "../../services/users/users.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-second-sign-up-form',
  templateUrl: './second-sign-up-form.component.html',
  styleUrls: ['./second-sign-up-form.component.css']
})
export class SecondSignUpFormComponent implements OnInit {
  @Output() chooseStep = new EventEmitter()
  signUpFrom
  constructor(public formBuilder: FormBuilder, public usersService: UsersService, public router: Router) {
    this.signUpFrom = this.formBuilder.group(this.usersService.getRegisterDetailsSecondPart())
  }

  ngOnInit() {
    this.signUpFrom.valueChanges.subscribe((res) => {
      this.usersService.setRegisterDetailsSecondPart(res)
    })
  }
  register() {
    const { value } = this.signUpFrom
    const { firstName, lastName, city, street } = value
    if (!firstName || !lastName || !city || !street) return this.handleMessage()
    this.usersService.register().subscribe((res) => {
      const { registerRedirect } = res
      if (registerRedirect) this.router.navigate(["/signin"])
    })
  }
  goBack() {
    this.chooseStep.emit({ step: 'one' })
  }
  handleMessage() {
    alert("please fill in all fields")
  }
}
