import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './providers/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private AuthService:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.AuthService.isLoggedIn()) {
            // logged in so return true
            return true;
        }
     // not logged in so redirect to login page with the return url and return false
        this.router.navigate(['/session/signin']);
        return false;
  }
}

