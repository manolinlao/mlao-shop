import { Component, OnInit } from '@angular/core';
import { NgModel, ValidationErrors } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { Model } from '../../model/repository.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  model: Model = new Model();
  selectedProduct: string | undefined;
  newProduct: Product = new Product();

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  constructor() {}

  ngOnInit(): void {}

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  submitForm() {
    console.log(this.newProduct);
    this.addProduct({ ...this.newProduct });
  }
}
