import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { sumPipe } from './shared/sum.pipe';
import { ItemTotalPipe } from './shared/item-total.pipe';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    CartComponent,
    sumPipe,
    ItemTotalPipe,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
