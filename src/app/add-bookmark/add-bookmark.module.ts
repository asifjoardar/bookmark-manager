import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookmarkComponent } from './add-bookmark.component';
import {MaterialModule} from "../shared/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AddBookmarkComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AddBookmarkModule { }
