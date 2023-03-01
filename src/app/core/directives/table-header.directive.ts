import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[tableHeader]'
})
export class TableHeaderDirective {
  private key: string | undefined;

  @Input("tableHeader") 
  
  set Key(v: string | undefined) { this.key = v; }

  get Key(): string | undefined { return this.key }

  constructor(private el$: ElementRef<HTMLElement>) { }

}
