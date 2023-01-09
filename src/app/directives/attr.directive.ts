import { Attribute, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[mlao-attr]',
})
export class MlaoAttrDirective {
  constructor(element: ElementRef, @Attribute('mlao-attr') bgClass: string) {
    element.nativeElement.classList.add(bgClass || 'bg-success', 'fw-bold');
  }
}
