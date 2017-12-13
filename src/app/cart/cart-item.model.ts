import { Product } from "../products/Product";

export class CartItem {
    constructor(public product: Product, public nums: number[]) {}
  }
  