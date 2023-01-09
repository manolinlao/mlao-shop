import {
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[mlao-if]',
})
export class StructureDirective {
  @Input('mlao-if') expressionResult: boolean | undefined;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['expressionResult'];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }
}
