import { Product } from "../products/Product";
import { CartItem } from "./cart-item.model";
import { Subject } from "rxjs/Subject";
import { Observable } from 'rxjs';

export class CartService{

    cartListChanged = new Subject<CartItem[]>();
    private cartList : CartItem[] = []

    getAll = () => {
        return this.cartList.slice();
    }

    add = (product: Product)=>{
        if(this.cartList.length == 0){
            let newCartItem = new CartItem(product, [1]);
            this.cartList.push(newCartItem);
        } else {
            for( let i = 0; i < this.cartList.length ; i++){
                if(this.cartList[i].product.id == product.id){
                    this.cartList[i].nums.push(1);
                } else {
                    let newCartItem = new CartItem(product, [1]);
                    this.cartList.push(newCartItem);
                }
            }
        }
        console.log(this.cartList)
        this.cartListChanged.next(this.cartList.slice());
        this.cartListChanged.complete();
    }
}