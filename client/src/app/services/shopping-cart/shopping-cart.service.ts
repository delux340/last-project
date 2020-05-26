import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http"

const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // private readonly cartSubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  // public cart$: Observable<any> = this.cartSubject.asObservable();
  constructor(public http: HttpClient) { }


  // getCart() {
  //   this.productsService.getAllProducts()
  //     .then(products => {
  //       this.cartSubject.next(products);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     })
  // }
  cartInit(): Observable<any> {
    return this.http.get(`${baseURL}/shoppingcart`)
  }


}
