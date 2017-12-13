import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart-item.model';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})
export class CartComponent implements OnInit, OnDestroy {

  cartItems: CartItem[];
  private subscription: Subscription;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getAll();
    this.subscription = this.cartService.cartListChanged
      .subscribe(
        (cartItems: CartItem[]) => {
          console.log(2222)
          console.log(cartItems)
          this.cartItems = cartItems;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
