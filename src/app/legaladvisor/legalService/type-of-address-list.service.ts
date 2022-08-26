import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeOfAddressListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTypeOfAddressList():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/typeofaddress')
  }

}
//   typeOfAddressList() {
//     return [
//       {
//         id: 1,
//         name: 'Office'
//       }, {
//         id: 2,
//         name: 'Home'
//       }
//     ]
//   }
// }

