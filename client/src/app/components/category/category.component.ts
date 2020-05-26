import { Component, OnInit } from '@angular/core';
import { ProductsStateService } from "../../services/products-state/products-state.service"
import { ProductsServiceService } from "../../services/productsService/products-service.service"

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: Array<any>
  constructor(public productsService: ProductsServiceService, public productsStateService: ProductsStateService) { }

  ngOnInit() {
    this.productsStateService.handleProducts()
    this.productsStateService.categories$.subscribe((categories) => this.categories = categories)
  }

  setCategory(category) {
    this.productsStateService.setCategory(category)
  }

}
