import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  SimpleChange,
} from '@angular/core';

@Directive({
  selector: '[mlao-twoway-attr]',
})
export class TwowayDirective {
  @Input('mlao-twoway-attr') modelProperty: string | undefined = '';

  @HostBinding('value') fieldValue: string = '';

  @Output('mlao-twoway-change') update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value']) updateValue(
    newValue: string
  ) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
  }

  constructor() {}

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['modelProperty'];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes['modelProperty'].currentValue || '';
    }
  }
}
