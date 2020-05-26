import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

const baseURL = "http://localhost:4000"

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  selectedCategory: String
  productsArray: Array<any>
  constructor(public http: HttpClient) {
  }
  getAllProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${baseURL}/products/all`).toPromise();
  }

  handleProducts(products) {
    let result = products.reduce((obj, itr) => {
      return { ...obj, [itr.category]: itr.category }
    }, {})
    return Object.keys(result)
  }
  update(product: Product) {
    return Promise.resolve({});
  }

  delete(id: string) {
    return Promise.resolve({});
  }

  create(product: Product) {
    return Promise.resolve({});
  }
}

