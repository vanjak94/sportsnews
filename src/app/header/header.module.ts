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
    HttpClientModule
  ]
})
export class HeaderModule { }
