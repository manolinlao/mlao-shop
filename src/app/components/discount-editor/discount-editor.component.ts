import { Component } from '@angular/core';
import { DiscountService } from '../../services/discount.service';

@Component({
  selector: 'app-discount-editor',
  templateUrl: './discount-editor.component.html',
  styleUrls: ['./discount-editor.component.css'],
})
export class DiscountEditorComponent {
  constructor(public discountService: DiscountService) {}
}
