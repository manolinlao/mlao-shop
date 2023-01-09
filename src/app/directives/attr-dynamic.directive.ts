import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../model/product.model';

@Directive({
  selector: '[mlao-attr-dyn]',
})
export class MlaoAttrDynamicDirective {
  // bindings on the host element are defined using 2 decorators: @HostBinding y @HostListener
  @Input('mlao-attr-dyn') @HostBinding('class') bgClass: string | null = '';

  //esta directiva también lanza eventos
  @Input('mlao-product-dyn') product: Product = new Product();
  @Output('mlao-category-dyn') click = new EventEmitter<string>();

  @HostListener('click') triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

  constructor(private element: ElementRef) {
    // podemos usar esto para capturar eventos, pero esto sólo funciona en aplicaciones
    // que corran en un web browser, porque juega con el DOM
    // para evitar esto usaremos el @HostListener-@HostBinding
    /*
    this.element.nativeElement.addEventListener('click', () => {
      if (this.product != null) {
        this.click.emit(this.product.category);
      }
    });

    */
  }

  /*
  // no usamos esto porque esto no controla los cambios
  ngOnInit() {
    this.element.nativeElement.classList.add(
      this.bgClass || 'bg-success',
      'fw-bold'
    );
  }
  */

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
