import { Component, OnInit } from '@angular/core';
import {FeatureService} from "../feature.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailsData: any;
  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.featureService.detailsData.subscribe(data => {
      this.detailsData = data;
    });
  }

}
