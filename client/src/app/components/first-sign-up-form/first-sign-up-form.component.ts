import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from "@angular/forms"
import { UsersService } from "../../services/users/users.service"


@Component({
  selector: 'app-first-sign-up-form',
  templateUrl: './first-sign-up-form.component.html',
  styleUrls: ['./first-sign-up-form.component.css']
})

export class FirstSignUpFormComponent implements OnInit {
  @Output() chooseStep = new EventEmitter()
  signUpFrom
  constructor(public formBuilder: FormBuilder, public usersService: UsersService) {
    this.signUpFrom = this.formBuilder.group(this.usersService.getUserDeatilsFirstPart())
  }

  ngOnInit() {
    this.signUpFrom.valueChanges.subscribe((res) => {
      this.usersService.setRegisterDetailsFirstPart(res)
    })
  }


  nextStep() {
    const { value } = this.signUpFrom
    const { email, password, confirmPassword, id } = value
    if (!id || !email || !password || !confirmPassword) return
    if (password !== confirmPassword) return this.passwordValidation()
    this.usersService.verifyRegister(value).subscribe((res) => {
      if (!res) this.chooseStep.emit({ step: 'two' })
    })
  }
  passwordValidation() {
    alert("password does not match")
  }
}
