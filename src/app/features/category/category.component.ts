import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../feature.service";
import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  items = Array.from({length: 10}).map((_, i) => `Item #${i}`);
  prevData: any;
  mark: boolean = false;
  catPos: any;
  category = [
    {
      name: 'abc',
      data:[{
        title: 'djfndjfdj',
        url: 'blabla'
      },
        {
          title: 'rrrrrr',
          url: 'blabla'
        }]
    }
  ]
  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.prevData = localStorage.getItem("category")
    if(this.prevData){
      this.prevData = JSON.parse(this.prevData);
      console.log(this.prevData);
      for(let i=0;i<this.prevData.length;i++){
        for(let j=0;j<this.category.length;j++){
          this.catPos=j;
          if(this.category[j].name == this.prevData[i].name) {
            this.mark = true;
          }
          else
            this.mark=false;
        }
        if(this.mark){
          this.category[this.catPos].data.push(...this.prevData[i].data)
        }
        else{
          this.category.push(this.prevData[i]);
        }
      }
    }
    console.log(this.category);
  }
  onClickDetails(data: any){
    this.featureService.onDetailsData(data);
  }
}
