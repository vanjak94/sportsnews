import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserFormModalComponent } from './user-form-modal/user-form-modal.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
  // declarations: [UserService],
  imports: [CommonModule, UserRoutingModule, HttpClientModule],
  declarations: [
    UserFormComponent,
    UserFormModalComponent,
    UsersListComponent
  ],
})
export class UserModule {}
