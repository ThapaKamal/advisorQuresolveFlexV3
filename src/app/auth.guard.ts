import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './login/sign-in/authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService:AuthService,
  private router:Router)
{}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  Promise<boolean> | boolean {
      let isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated){
        return true;
      }else{
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  
}
// if(isAuthenticated){
//   return true;
// }else{
//     this.router.navigateByUrl{'/login'}
// }