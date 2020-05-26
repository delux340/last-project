import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from "@angular/forms"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product
  inputVisibility: boolean
  quantity = new FormControl(0);

  constructor() {
    this.inputVisibility = false
  }

  ngOnInit() {

  }
  getProduct(product) {
    console.log(product)
    console.log(this.quantity.value)
  }

}

