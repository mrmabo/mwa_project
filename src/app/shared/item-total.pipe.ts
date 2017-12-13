import {Pipe, PipeTransform} from '@angular/core';
import { CartItem } from '../cart/cart-item.model';

@Pipe({
    name:'itemTotal'
})
export class ItemTotalPipe implements PipeTransform{
    transform(item:CartItem, qty: number = 0){
        return item.product.price *qty;
    }
}