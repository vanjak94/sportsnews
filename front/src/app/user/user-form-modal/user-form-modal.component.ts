import { ICreateUpdateUserDto } from './../dtos/create-update-user.dto';
import { IUser } from './../models/user.model';
import { UserService } from './../user.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-modal',
  templateUrl: './user-form-modal.component.html',
  styleUrls: ['./user-form-modal.component.css'],
})
export class UserFormModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(existingUser?: IUser): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      data: existingUser,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  constructor(
    private userService: UserService,
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser | undefined
  ) {
    this.userFormData = {
      username: '',
      password: '',
      name: '',
      isAdmin: false,
      isActive: true,
      ...data,
    };
  }

  isFormInvalid() {
    return (
      this.userFormData.name === '' ||
      this.userFormData.username === '' ||
      (!this.userFormData.id && this.userFormData.password === '')
    );
  }

  userFormData: ICreateUpdateUserDto;

  createOrUpdateUser(data: ICreateUpdateUserDto) {
    console.log(this.userFormData);
    ((data as ICreateUpdateUserDto).id
      ? this.userService.update(data as ICreateUpdateUserDto)
      : this.userService.create(data as ICreateUpdateUserDto)
    ).subscribe((data) => {
      this.dialogRef.close();
    });
  }

  ngOnInit(): void {}
}
