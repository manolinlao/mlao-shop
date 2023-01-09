import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[mlao-for]',
})
export class IteratorDirective {
  @Input('mlao-for') dataSource: any;

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}

  ngOnInit() {
    console.log('ngOnInit', this.dataSource);
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      console.log(i);
      this.container.createEmbeddedView(
        this.template,
        new IteratorContext(this.dataSource[i], i, this.dataSource.length)
      );
    }
  }
}

class IteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  item: any;
  constructor(public $implicit: any, public index: number, total: number) {
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
    this.item = $implicit;

    setInterval(() => {
      this.odd = !this.odd;
      this.even = !this.even;
      this.$implicit.price++;
    }, 2000);
  }
}
