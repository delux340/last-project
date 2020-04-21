import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  registerDetailsFirstPart
  registerDetailsSecondPart

  constructor(public http: HttpClient) {
    this.registerDetailsFirstPart = {
      id: 0,
      email: "",
      password: "",
      confirmPassword: ""
    }

    this.registerDetailsSecondPart = {
      city: "",
      street: "",
      firstName: "",
      lastName: ""
    }
  }
  getUserDeatilsFirstPart() {
    return this.registerDetailsFirstPart
  }
  getRegisterDetailsSecondPart() {
    return this.registerDetailsSecondPart
  }

  register(): Observable<any> {
    const { registerDetailsFirstPart, registerDetailsSecondPart } = this
    return this.http.post(`${baseURL}/users/register`, { ...registerDetailsFirstPart, ...registerDetailsSecondPart })
  }

  login(user): Observable<any> {
    return this.http.post(`${baseURL}/users/login`, user)
  }

  verifyRegister(user): Observable<any> {
    return this.http.post(`${baseURL}/users/register/verify`, user)
  }

  setRegisterDetailsFirstPart(details) {
    this.registerDetailsFirstPart = details
  }
  setRegisterDetailsSecondPart(details) {
    this.registerDetailsSecondPart = details
  }
}
