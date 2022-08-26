import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BarMembershipListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBarMembershipsList():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/barmembership')
  }

}

//   barMembershipsList() {
//     return [
//       {
//         id: 1,
//         name: 'Bar council of Delhi'
//       }, {
//         id: 2,
//         name: 'Bar council of Haryana'
//       },
//       {
//         id: 3,
//         name: 'Bar council of U.P'
//       },
//     ]
//   }
// }

