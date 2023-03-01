import { QuestionBase } from './question-base';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: QuestionBase<string>[]){
    
    const group : any = {}

    questions.forEach(question=>{
      group[question.key]=question.required 
        ? new FormControl(question.value || '',Validators.required)
        : new FormControl(question.value || '');
    });

    return new FormControl(group);

  }

  constructor() { }
}
