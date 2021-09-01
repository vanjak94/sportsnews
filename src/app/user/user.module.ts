import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  // declarations: [UserService],
  imports: [CommonModule, HttpClientModule],
  declarations: [
    UserFormComponent,
    UserFormModalComponent,
    UsersListComponent
  ],
})
export class UserModule {}
