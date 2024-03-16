import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchParamsSource = new BehaviorSubject<ShopParams>(new ShopParams());
  currentSearchParams = this.searchParamsSource.asObservable();

  constructor() { }

  updateSearchParams(params: Partial<ShopParams>) {
    console.log("Updating search params with:", params);
    const currentParams = this.searchParamsSource.getValue(); 
    const updatedParams = { ...currentParams, ...params };
    console.log("Updated params:", updatedParams);
    this.searchParamsSource.next(updatedParams);
  }
}
