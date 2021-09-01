import { AuthService } from './../auth.service';
import { IUser } from './../models/user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {}

  users: IUser[] = [];
  get currUser(): IUser | undefined {
    return this.authService.currUser;
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
  }
}
