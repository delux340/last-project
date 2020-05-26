import { Component, OnInit } from '@angular/core';
import { ProductsStateService } from "../../services/products-state/products-state.service"
import { SearchService } from "../../services/search-service/search.service"

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  filterdArray: Array<any>
  searchInput: String
  constructor(public searchService: SearchService, public productsStateService: ProductsStateService) {
  }

  ngOnInit() {
    this.productsStateService.filterArray()
    this.productsStateService.filterdCategoryArray$.subscribe((products) => this.filterdArray = products)
    this.searchService.search$.subscribe((input) => { this.searchInput = input })
  }
}
