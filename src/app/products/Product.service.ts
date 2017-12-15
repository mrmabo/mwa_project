import { Product } from "./Product";
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs/Observable";

export class ProductService {
    products: Product[] = [
        new Product(1, 'iPhone', 300,'This is a phone'),
        new Product(2, 'iPad', 400,'This is a ipad'),
        new Product(3, 'Apple TV', 1000,'This is a TV'),
    ]

    pListChanged = new BehaviorSubject<Product[]>(this.products);


    getAllProducts = () : Observable<Product[]> => {
        return this.pListChanged.asObservable();
    }

    getProductById = (id: number) => {
        
    }

    removeProductById = (id: number) => {
        this.products.splice(id -1 , 1);
    }

    addProduct = (id: number, name: string, price: number, desc: string) => {
        let newProduct = new Product(id, name, price, desc);
        this.products.push(newProduct);
        this.pListChanged.next(this.products);
    }
}