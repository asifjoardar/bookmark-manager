import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import {MaterialModule} from "../shared/material/material.module";
import { DetailsComponent } from './details/details.component';
import {FlexLayoutModule} from "@angular/flex-layout";



@NgModule({
  declarations: [
    CategoryComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CategoryComponent,
    DetailsComponent
  ]
})
export class FeaturesModule { }
