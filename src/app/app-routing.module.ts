import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentsComponent} from "./layout/contents/contents.component";
import {AddBookmarkComponent} from "./add-bookmark/add-bookmark.component";

const routes: Routes = [
  { path: '', component: ContentsComponent},
  { path: 'add', component: AddBookmarkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
