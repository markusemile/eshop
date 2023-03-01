import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit{
  
  @Input() data : any;
  
  multiple= true;
  
  ngAfterViewInit(): void {
    console.log("dropdown");
    console.log(this.data);
    
  }



}
