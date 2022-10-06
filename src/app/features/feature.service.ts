import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  detailsData = new Subject();
  constructor() { }
  onDetailsData(data: any){
    this.detailsData.next(data);
  }
}
