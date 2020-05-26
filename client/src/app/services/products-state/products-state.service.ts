import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductsServiceService } from '../productsService/products-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProductsStateService {

  private readonly productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  private readonly categoryArraySubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public categories$: Observable<Product[]> = this.categoryArraySubject.asObservable();

  private readonly filterdCategorySubject: BehaviorSubject<any> = new BehaviorSubject<any>("Fruits");
  public filterdCategory$: Observable<Product[]> = this.filterdCategorySubject.asObservable();

  private readonly filterdArraySubject: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public filterdCategoryArray$: Observable<Product[]> = this.filterdArraySubject.asObservable();

  constructor(private productsService: ProductsServiceService) { }


  getProducts() {
    this.productsService.getAllProducts()
      .then(products => {
        this.productsSubject.next(products);
      })
      .catch(err => {
        console.error(err);
      })
  }
  handleProducts() {
    this.products$.subscribe((data) => {
      const categoryArray = this.productsService.handleProducts(data)
      this.categoryArraySubject.next(categoryArray)
    })
  }
  filterArray() {
    this.filterdCategory$.subscribe(() => {
      this.products$.subscribe((products) => {
        const filterdArray = products.filter((itr) => itr.category === this.filterdCategorySubject.getValue())
        this.filterdArraySubject.next(filterdArray)
      })
    })
  }

  setCategory(category) {
    this.filterdCategorySubject.next(category)
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

