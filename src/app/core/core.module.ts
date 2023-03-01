import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ListofComponent } from './component/listof/listof.component';
import { TableHeaderDirective } from './directives/table-header.directive';
import { QuestionFormComponent } from './form/dynamicForm/question-form/question-form.component';
import { TextComponent } from './form/dynamicForm/Element/text/text.component';
import { DropdownComponent } from './form/dynamicForm/Element/dropdown/dropdown.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListofComponent,
    TableHeaderDirective,
    QuestionFormComponent,
    TextComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarComponent,
    ListofComponent,
    TableHeaderDirective,
    QuestionFormComponent,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
