import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUsPayload } from '../model/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private url = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient) 
  { }

  saveQuery(contactUsPayload: ContactUsPayload): Observable<any> {
    return this.httpClient.post(this.url +'contactus', contactUsPayload);
  }

  getQuery(permaLink:Number):Observable<ContactUsPayload> {
    return this.httpClient.get<ContactUsPayload>(this.url+'all'+ permaLink);
   }

  
}
