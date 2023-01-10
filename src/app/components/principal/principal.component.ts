import { Component } from '@angular/core';
import { Model } from '../../model/repository.model';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  model: Model = new Model();

  addProduct(product: Product) {
    this.model.saveProduct(product);
  }
}
