import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseCitylistService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getBaseCityList():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/basecity')
  }

}
//   baseCityList() {
//     return [
//       {
//         id: 1,
//         name: "Delhi NCR"
//       }
//     ]
//   }
// }
