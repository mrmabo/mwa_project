import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../../cart/cart.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  selectProduct: Product;
  @Output()
  deleteProduct= new EventEmitter<Product>();

  constructor(private cartService: CartService,
              private productService: ProductService, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
                this.selectProduct = this.productService.getProductById(+params['id']);
            }
        )
  }

  
  requestDelete() { 
    this.deleteProduct.emit(this.selectProduct);
  }

  addCart(product: Product){
    this.cartService.add(product);
  }

}
