import { AuthService } from './auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  // declarations: [UserService],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatCheckboxModule],
  declarations: [UserFormComponent, UserFormModalComponent, UsersListComponent],
  providers: [UserService, AuthService],
})
export class UserModule {}
