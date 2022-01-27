import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {

  constructor() { }

  cards() {
    return [71, 78, 39, 66];
  }
}
