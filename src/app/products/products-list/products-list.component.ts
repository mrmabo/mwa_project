import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  providers:[ProductService],
  styles: [`
    ul{
      border: 1px solid green;
      margin: 20px 30px;
    }
  `]
})
export class ProductsListComponent implements OnInit {

  products: Product[]
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  delete(product: Product) {
    this.productService.removeProductById(product.id);
  }

}
