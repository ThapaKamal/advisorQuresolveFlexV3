import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeOfDegreeListService {

  constructor() { }

  typeOfDegreeList() {
    return [
      {
        id: 1,
        name: "Bachelor's"
      }, {
        id: 2,
        name: "Master's"
      }, {
        id: 3,
        name: "Doctorate"
      }
    ]
  }
}