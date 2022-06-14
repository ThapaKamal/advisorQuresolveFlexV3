import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationPayload } from '../Payload/registrationPayload';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  private url = 'http://localhost:8080/api/auth/';


  constructor(private httpClient: HttpClient) 
    { }

    registration(registrationPayload: RegistrationPayload): Observable<any> {
      return this.httpClient.post(this.url + 'lawyerRegistration', registrationPayload);
    }
  
}
