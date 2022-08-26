import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getlanguage():Observable<any>{
    return this.httpClient.get(environment.apiUrl + '/api/get/language')
  }

}
