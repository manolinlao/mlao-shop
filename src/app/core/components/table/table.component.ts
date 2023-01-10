import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { Model } from 'src/app/model/repository.model';
import { MODES, SharedStateService } from '../../services/sharedState.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  constructor(private model: Model, private stateService: SharedStateService) {}

  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }

  editProduct(key?: number) {
    this.stateService.update(MODES.EDIT, key);
  }

  createProduct() {
    this.stateService.update(MODES.CREATE);
  }
}
