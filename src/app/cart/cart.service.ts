import { Product } from "../products/Product";
import { CartItem } from "./cart-item.model";
import { Subject } from "rxjs/Subject";
import { Observable, BehaviorSubject } from 'rxjs';

export class CartService{

    
    private cartList : CartItem[] = []
    private size: number;
    
    cartListChanged = new BehaviorSubject<CartItem[]>(this.cartList);

    getAll = () : Observable<CartItem[]> => {
        return this.cartListChanged.asObservable();
    }

    add = (product: Product)=>{
        
        let found = false;
        this.cartList.forEach(item=>{
            if(item.product.id === product.id){
                found = true;
                item.num += 1;
                this.size++;
                return;
            }
        });

        if(!found){
            this.cartList.push(new CartItem(product,1));
            this.size++;
        }
        this.cartListChanged.next(this.cartList);
        this.cartListChanged.complete();
    }
}