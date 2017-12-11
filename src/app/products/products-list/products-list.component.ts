import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: [`
    ul{
      border: 1px solid green;
      margin: 20px 30px;
    }
  `]
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [
    new Product(1, 'iPhone', 300,'This is a phone'),
    new Product(2, 'iPad', 400,'This is a ipad'),
    new Product(3, 'Apple TV', 1000,'This is a TV'),
  ]
  constructor() {}

  ngOnInit() {
  }

  delete(product: Product) {
    this.products.splice(product.id -1 , 1);
  }

}
