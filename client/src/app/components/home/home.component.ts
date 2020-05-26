import { Component, OnInit } from '@angular/core';
import { ProductsStateService } from 'src/app/services/products-state/products-state.service';
import { Product } from 'src/app/interfaces/product';
import { ShoppingCartService } from "../../services/shopping-cart/shopping-cart.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]

  constructor(public productsStateService: ProductsStateService, public cartService: ShoppingCartService) { }

  ngOnInit() {
    this.cartService.cartInit().subscribe((data) => console.log(data))
    this.productsStateService.getProducts();
    this.productsStateService.products$.subscribe((prodsResult) => {
      this.products = prodsResult;
    })
  }
}
