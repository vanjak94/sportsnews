import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from '../user/user.module';
import { NewsArticleModule } from '../news-article/news-article.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserModule,
    NewsArticleModule,
    HttpClientModule
  ]
})
export class HeaderModule { }
