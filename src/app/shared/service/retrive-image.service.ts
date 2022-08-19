import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetriveImageService {

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.http.get('http://localhost:8080/api/get/imageid/4');
  // }

  getImageData(): Observable<any> {
    return this.http.get('http://localhost:8080/api/get/imageid/1', { responseType: 'blob' });
    }
}
