import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsServiceService } from "../../services/productsService/products-service.service"

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnChanges {
  @Input() products
  categories: Array<any>
  constructor(public productsService: ProductsServiceService) { }

  ngOnInit() {
    this.categories = this.productsService.handleProducts(this.products)
  }
  ngOnChanges() {
    this.categories = this.productsService.handleProducts(this.products)
  }
}
