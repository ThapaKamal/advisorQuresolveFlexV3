import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseCitylistService {

  constructor() { }
  baseCityList() {
    return [
      {
        id: 1,
        name: "Delhi NCR"
      }
    ]
  }
}
