import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users/users.service"

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  step
  constructor(public usersService: UsersService) {
    this.step = "one"
  }

  ngOnInit() {
  }

  chooseStep($event) {
    this.step = $event.step
  }
}
