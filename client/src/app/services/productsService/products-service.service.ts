import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(public http: HttpClient) {

  }
  getAllProducts(): Observable<any> {
    return this.http.get(`${baseURL}/products/all`)
  }

}
