import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from "../../services/productsService/products-service.service"

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  arrayOfProducts: Array<any>
  constructor(public productsService: ProductsServiceService) {
    this.arrayOfProducts = []
  }

  ngOnInit() {
    this.productsService.getAllProducts().subscribe((res) => {
      console.log(res)
      this.arrayOfProducts = res
    })
  }

}
