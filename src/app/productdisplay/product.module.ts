
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdisplayComponent } from './productdisplay.component';
import { NgModule } from '@angular/core';
import { productrouting } from './product.routing';

@NgModule({
  declarations: [
    ProductdisplayComponent,
    EditproductComponent
   ],
   imports: [CommonModule,  ReactiveFormsModule ,productrouting]
  })
  export class ProductModule{}
