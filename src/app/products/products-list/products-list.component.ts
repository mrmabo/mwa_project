import { Component, OnInit, Output, EventEmitter,OnDestroy } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../Product.service';
import { Subscription } from 'rxjs/Subscription';

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
export class ProductsListComponent implements OnInit, OnDestroy {

  products: Product[]
  private subscription: Subscription;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAllProducts()
    .subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }

  ngOnInit() {
    // this.products = this.productService.getAllProducts();
  }

  delete(product: Product) {
    this.productService.removeProductById(product.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
