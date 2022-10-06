import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {
  addBookmrkForm: FormGroup = new FormGroup({})
  prevData: any;
  categoryData: any;
  categoryList: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addBookmrkForm = this.formBuilder.group({
      'title': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'url': new FormControl('',[Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
      'category': new FormControl('', Validators.required)
    });
    this.categoryData = localStorage.getItem("category")
    /*if(this.categoryData) {
      this.categoryData = JSON.parse(this.prevData);
      this.categoryList = this.categoryData.map();
    }*/
  }
  addBookmrk(){
      this.prevData = localStorage.getItem("category")
      if(!this.prevData){
        localStorage.setItem("category",JSON.stringify([{
          name: this.addBookmrkForm.value.category,
          data: [{
            title: this.addBookmrkForm.value.title,
            url: this.addBookmrkForm.value.url
          }]
        }]));
      }
      else{
        this.prevData = JSON.parse(this.prevData);
        this.prevData.push({
          name: this.addBookmrkForm.value.category,
          data: [{
            title: this.addBookmrkForm.value.title,
            url: this.addBookmrkForm.value.url
          }]
        });
        localStorage.setItem("category", JSON.stringify(this.prevData));
    }
  }
}
