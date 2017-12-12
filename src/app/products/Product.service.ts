import { Product } from "./Product";

export class ProductService {
    products: Product[] = [
        new Product(1, 'iPhone', 300,'This is a phone'),
        new Product(2, 'iPad', 400,'This is a ipad'),
        new Product(3, 'Apple TV', 1000,'This is a TV'),
    ]

    getAllProducts = () => {
        return this.products.slice();
    }

    getProductById = (id: number) => {
        
    }

    removeProductById = (id: number) => {
        this.products.splice(id -1 , 1);
    }
}