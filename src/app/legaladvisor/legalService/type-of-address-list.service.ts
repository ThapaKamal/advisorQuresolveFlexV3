import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeOfAddressListService {

  constructor() { }
  typeOfAddressList()
   {
    // return 
    [
      {
        id: 1,
        name: 'Office'
      }, {
        id: 2,
        name: 'Home'
      }
    ]
  }
}

