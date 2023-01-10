import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

// PIPE IMPURO!!!! , por defecto son todos puros

@Pipe({
  name: 'mlaoCategoryFilter',
  pure: false,
})
export class MlaoCategoryFilterPipe implements PipeTransform {
  transform(
    products: Product[] | undefined,
    category: string | undefined
  ): Product[] {
    if (products == undefined) {
      return [];
    }

    if (category == 'All') return products;

    return category == undefined
      ? products
      : products.filter((p) => p.category == category);
  }
}
