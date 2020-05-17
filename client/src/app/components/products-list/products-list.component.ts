import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductsServiceService } from "../../services/productsService/products-service.service"

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() products
  selectedCategory: String
  filterdArray: Array<any>
  constructor(public productsService: ProductsServiceService) {
    this.selectedCategory = this.productsService.getSelectedCategory()
  }

  ngOnInit() {
    this.filterdArray = this.products.filter((itr) => itr.category.toLowerCase() === this.selectedCategory.toLowerCase())
  }
  ngOnChanges() {
    this.filterdArray = this.products.filter((itr) => itr.category.toLowerCase() === this.selectedCategory.toLowerCase())
  }
}
