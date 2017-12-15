import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailComponent } from './products/products-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';

const appRoutes: Routes = [
  { path: 'product-list', component: ProductsListComponent },
  { path: 'product-detail/:id', component: ProductsDetailComponent },
  { path: 'cart-detail', component: CartComponent },
  { path: 'product-add', component: ProductsAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
