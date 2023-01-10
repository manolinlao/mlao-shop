import { Component, Input, ViewChildren } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Model } from '../../model/repository.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent {
  taxRate: number = 0;
  categoryFilter: string | undefined = undefined;
  @Input('model') dataModel: Model | undefined;

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }

  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel?.deleteProduct(key);
  }
}
