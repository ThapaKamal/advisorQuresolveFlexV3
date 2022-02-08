import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from '../login-Payload';
import {map} from 'rxjs/operators';
import { JwtAutResponse } from '../jwtAutResponse';
import {LocalStorageService} from 'ngx-webstorage';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient, 
    private localStorageService: LocalStorageService
    ) {
  }

  register(loginPayload: LoginPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', loginPayload);
  }

  login(loginPayload: LoginPayload): Observable<boolean> {

    console.log('inside auth Service loginMethod');
    
    return this.httpClient.post<JwtAutResponse>(this.url + 'login', loginPayload).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);
      return true;
    }));
  }

  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }

  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}