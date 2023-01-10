import { Component, EventEmitter, Output } from '@angular/core';
import { Model } from 'src/app/model/repository.model';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  newProduct: Product = new Product();

  constructor(private model: Model) {}

  //@Output('mlaoNewProduct') newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    //this.newProductEvent.emit(this.newProduct);
    this.model.saveProduct(this.newProduct);
    this.newProduct = new Product();
    form.reset();
  }
}
