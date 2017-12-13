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

  constructor(private cartService: CartService) { 
    this.subscription = this.cartService.getAll()
    .subscribe(
      (cartItems: CartItem[]) => {
        this.cartItems = cartItems;
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
