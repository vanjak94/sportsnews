import { Router } from '@angular/router';
import { AuthService } from './../../user/auth.service';
import { ILogInDto } from './../../user/dtos/log-in.dto';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form-modal',
  templateUrl: './login-form-modal.component.html',
  styleUrls: ['./login-form-modal.component.css'],
})
export class LoginFormModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  // selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public dialogRef: MatDialogRef<LoginFormComponent>
  ) {}

  ngOnInit(): void {}

  logInData: ILogInDto = {
    username: '',
    password: '',
  };

  logIn(data: ILogInDto) {
    console.log(data);
    this.authService.logIn(data).subscribe((data) => {
      this.dialogRef.close();
    });
  }
}
