import { CoreModule } from './../../core/core.module';
import { AddproductComponent } from './addproduct/addproduct.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AddproductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule
  ],
  exports:[
    AddproductComponent
  ]
})
export class AdminModule { }
