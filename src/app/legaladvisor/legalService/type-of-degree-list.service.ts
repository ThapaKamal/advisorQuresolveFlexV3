import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeOfDegreeListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getTypeOfDegreeList():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/typeofdegree')
  }

}

//   typeOfDegreeList() {
//     return [
//       {
//         id: 1,
//         name: "Bachelor's"
//       }, {
//         id: 2,
//         name: "Master's"
//       }, {
//         id: 3,
//         name: "Doctorate"
//       }
//     ]
//   }
// }