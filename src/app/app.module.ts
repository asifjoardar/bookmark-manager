import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";
import {LayoutModule} from "./layout/layout.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import {AddBookmarkModule} from "./add-bookmark/add-bookmark.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    LayoutModule,
    AddBookmarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
