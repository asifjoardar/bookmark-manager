import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MaterialModule} from "../shared/material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ContentsComponent } from './contents/contents.component';
import {FeaturesModule} from "../features/features.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentsComponent
  ],
  exports: [
    HeaderComponent,
    ContentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FeaturesModule,
    RouterModule
  ]
})
export class LayoutModule { }
