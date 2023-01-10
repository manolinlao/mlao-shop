import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, 'Kayak', 'Watersports', 275),
      new Product(2, 'Lifejacket', 'Watersports', 48),
      new Product(3, 'Soccer Ball', 'Soccer', 20),
      new Product(4, 'Corner Flags', 'Soccer', 99.23),
      new Product(5, 'Thinking Cap', 'Chess', 16)
    );
  }

  getData(): Product[] {
    return this.data;
  }
}
