import { Component } from '@angular/core';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount-display',
  templateUrl: './discount-display.component.html',
  styleUrls: ['./discount-display.component.css'],
})
export class DiscountDisplayComponent {
  constructor(public discountService: DiscountService) {}
}
