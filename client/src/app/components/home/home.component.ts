import { Component, OnInit } from '@angular/core';
import { ProductsStateService } from 'src/app/services/products-state/products-state.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]

  constructor(public productsStateService: ProductsStateService) {}

  ngOnInit() {
    this.productsStateService.getProducts(); // action
    this.productsStateService.products$.subscribe((prodsResult) => {
      this.products = prodsResult;
      console.log(this.products)
    })
  }



}
