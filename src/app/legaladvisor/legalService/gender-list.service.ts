import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenderListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private url = 'http://localhost:8080/api/get';

  getGenderList():Observable<any>{
    return this.httpClient.get(this.url + '/gender')
  }



}
