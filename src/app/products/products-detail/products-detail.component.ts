import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';
import { Product } from '../Product';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
  providers: [CartService]
})
export class ProductsDetailComponent implements OnInit {

  @Input()
  selectProduct: Product;
  @Output()
  deleteProduct= new EventEmitter<Product>();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  
  requestDelete() { 
    this.deleteProduct.emit(this.selectProduct);
  }

  addCart(product: Product){
    this.cartService.add(product);
  }

}
