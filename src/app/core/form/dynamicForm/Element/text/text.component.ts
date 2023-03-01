import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, AfterViewInit, forwardRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextComponent),
      multi: true
    }
  ]
})
export class TextComponent implements ControlValueAccessor {
  
  @Input() id : string = '';
  @Input() type : string = 'text';
  @Input() name : string = '';

  isDisabled: boolean = false
  onChange: any = (v: any) => {}
  onTouched: any = () => {}

  private value: any
  set Value(v: any) {
    this.value = v
    this.onChange(v)
  }
  get Value(): any {
    return this.value
  }
  
  ngAfterViewInit(): void {
    
  }

  
  writeValue(obj: any): void {
    this.value = obj
    this.onChange(obj)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
