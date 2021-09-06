import { UserFormComponent } from './../user-form-modal/user-form-modal.component';
import { MatDialog } from '@angular/material/dialog';
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
    private authService: AuthService,
    public dialog: MatDialog
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

  openEditUserDialog(user: IUser) {
    this.dialog.open(UserFormComponent, {
      data: user
    })
  }
}
