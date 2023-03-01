import { IQuestionForm } from './../../../core/form/dynamicForm/IQuestion.models';
import { Product} from './../../../core/models/product';
import { AfterViewInit, Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { IForm } from 'src/app/core/form/dynamicForm/TForm';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddproductComponent {


controllers = new FormGroup<IForm<Product>>({
  title:new FormControl('',{validators:[Validators.required]}),
  description:new FormControl('',{validators:[Validators.required]}),
  compose:new FormControl(''),
  price:new FormControl('',{validators:[Validators.required,Validators.min(1)]})  
})
   
questions : IQuestionForm[] = [
  {type:"text",name:"title",options:[{}],style:['input']},
  {type:"text",name:'designation',options:[{}],style:['input']},
  {type:"dropdown",name:"compose",options:[{"db":"product"}],style:[]},
  {type:"text",name:"price",options:[{}],style:['input']}
]
  
}