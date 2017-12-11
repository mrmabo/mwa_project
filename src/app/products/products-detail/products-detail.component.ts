import { Component, OnInit, Input, EventEmitter , Output} from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  @Input()
  selectProduct: Product;
  @Output()
  deleteProduct= new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  
  requestDelete() { 
    this.deleteProduct.emit(this.selectProduct);
  }

}
