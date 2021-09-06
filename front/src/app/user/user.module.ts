import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AdminGuardService } from './admin-guard.service';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {
  UserFormModalComponent,
  UserFormComponent,
} from './user-form-modal/user-form-modal.component';
import { UsersListComponent } from './users-list/users-list.component';
import { MatInputModule } from '@angular/material/input';
import {  MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [UserFormComponent, UserFormModalComponent, UsersListComponent],
  providers: [UserService, AuthService, AdminGuardService, AuthInterceptor],
})
export class UserModule {}
