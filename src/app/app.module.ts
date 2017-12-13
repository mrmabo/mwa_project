import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { sumPipe } from './shared/sum.pipe';
import { ItemTotalPipe } from './shared/item-total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    CartComponent,
    sumPipe,
    ItemTotalPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
