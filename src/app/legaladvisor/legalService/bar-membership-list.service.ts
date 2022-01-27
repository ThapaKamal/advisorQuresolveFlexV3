import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarMembershipListService {

  constructor() { }
  barMembershipsList() {
    return [
      {
        id: 1,
        name: 'Bar council of Delhi'
      }, {
        id: 2,
        name: 'Bar council of Haryana'
      },
      {
        id: 3,
        name: 'Bar council of U.P'
      },
    ]
  }
}

