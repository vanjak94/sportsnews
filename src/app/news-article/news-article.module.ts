import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsArticleRoutingModule } from './news-article-routing.module';
import { UserModule } from '../user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsArticleService } from './news-article.service';

@NgModule({
  declarations: [NewsArticleService],
  imports: [
    CommonModule,
    NewsArticleRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  exports: [NewsArticleService],
})
export class NewsArticleModule {}
