import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { NewsArticleModule } from '../news-article/news-article.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFormModalComponent } from './login-form-modal/login-form-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    UserDropdownComponent,
    SearchFormComponent,
    LoginFormComponent,
    LoginFormModalComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    NewsArticleModule,
    HttpClientModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent
  ],
  // bootstrap: [
  //   HeaderComponent
  // ]
})
export class HeaderModule { }
