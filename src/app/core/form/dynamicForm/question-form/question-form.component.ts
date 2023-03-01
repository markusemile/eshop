import { Component, Input, AfterViewInit,forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

export type FQuestionCreate = { title: FormControl, description: FormControl, compose: FormControl, price: FormControl}

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
  providers:[
    { provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>QuestionFormComponent),
      multi:true
    }
  ]
})
export class QuestionFormComponent implements AfterViewInit {

  @HostBinding("class") iClass:string = "product";

  get ControlKeys(): {name: string, type: string}[] { return [ 
    { name: "title", type: 'text' },
    { name: "description", type: 'text' },
    { name: "compose", type: 'text' },
    { name: "price", type: 'number' }
  ] }


  form = new FormGroup({
    title:new FormControl('',{validators:[Validators.required]}),
    description:new FormControl('',{validators:[Validators.required]}),
    compose:new FormControl(''),
    price:new FormControl('',{validators:[Validators.required,Validators.min(1)]})  
  })


  
  
  ngAfterViewInit(): void {
  }


}
