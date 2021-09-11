import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    const currUser = this.auth.currUser;

    if (!currUser?.isAdmin) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
