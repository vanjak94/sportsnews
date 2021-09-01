import { AuthService } from './../../user/auth.service';
import { Router } from '@angular/router';
import { IUser } from './../../user/models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.css'],
})
export class UserDropdownComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    //
  }

  get currUser(): IUser | undefined {
    return this.authService.currUser;
  }

  redirectToUsers() {
    this.router.navigateByUrl('/users');
  }

  isLoggedIn() {
    return !!this.currUser;
  }

  logOut() {
    this.authService.logOut();
  }
}
