import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class TokenGaurdService implements CanActivate {
  isValid: boolean
  constructor(public router: Router, public http: HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.vaildateTokenReq().subscribe((res) => {
      if (!res.status) alert("token is invalid")
      return this.isValid = res.status
    })
    return this.isValid
  }

  vaildateTokenReq(): Observable<any> {
    const autorization = localStorage.getItem("token")
    return this.http.get(`${baseURL}/verify?autorization=${autorization}`)
  }
}
