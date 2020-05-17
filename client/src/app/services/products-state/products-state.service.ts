import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsServiceService } from '../productsService/products-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsStateService {

  private readonly productsSubject: BehaviorSubject<Product[]> = 
  new BehaviorSubject<Product[]>([]);

  public products$: Observable<Product[]> = this.productsSubject.asObservable();


  constructor(private productsService: ProductsServiceService) {
  }


  getProducts() {
    this.productsService.getAllProducts()
      .then(products => {
          this.productsSubject.next(products);
      })
      .catch(err => {
        console.error(err);
      })
  }

  // remove(productToRemove: Product) {
  //   this.productsService.delete(productToRemove._id)
  //     .then(res => {
  //       let currentProducts = this.productsSubject.getValue();
  //       this.productsSubject.next(currentProducts.filter(p => p._id !== productToRemove._id));
  //     })
  // }

  // update(newProduct: Product) {
  //     this.productsService.update(newProduct)
  //       .then((updatedProduct: Product) => {
  //         let currentProductsClone = {...this.productsSubject.getValue()};
  //         let index = currentProductsClone.findIndex(p => p._id === updatedProduct._id);
  //         currentProductsClone[index] = updatedProduct;
  //         this.productsSubject.next(currentProductsClone);

  //       })
  // }

  // create(newProduct: Product) {
  //   this.productsService.create(newProduct)
  //     .then((res: Product) => {
  //       let p: Product = res;
  //       let currentProducts: Product[] = this.productsSubject.getValue();
  //       this.productsSubject.next([...currentProducts, p]);

  //     })
  // }


}

