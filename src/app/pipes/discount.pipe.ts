import { Pipe, PipeTransform } from '@angular/core';
import { DiscountService } from '../services/discount.service';

// Esta pipe usará el servicio discountService, además ha de ser impura

@Pipe({
  name: 'mlaoDiscount',
  pure: false,
})
export class DiscountPipe implements PipeTransform {
  constructor(private discountService: DiscountService) {}

  transform(price?: number): number {
    return this.discountService.applyDiscount(price ?? 0);
  }
}
