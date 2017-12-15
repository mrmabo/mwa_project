import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  addForm = new FormGroup({ 
    id: new FormControl(), 
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });

  get id() {
    return this.addForm.get('id');
  }

  get name(){
    return this.addForm.get('name');
  }

  get price(){
    return this.addForm.get('price');
  }

  get desc(){
    return this.addForm.get('description');
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  createNewProduct(){
    this.productService.addProduct(this.id.value, this.name.value, this.price.value, this.desc.value);
  }

}
