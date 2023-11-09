import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authService: AuthguardService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {

      if (this.authService.isLoggedIn()) {
        return true; // Allow access to the route/component.
      } else {
        this.router.navigate(['']); // Redirect to the login page if the user is not logged in.
        return false;
      }
    
  }
  
}
