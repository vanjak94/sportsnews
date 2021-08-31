import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsArticleRoutingModule } from './news-article-routing.module';
import { UserModule } from '../user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsArticleService } from './news-article.service';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticlesListComponent } from './news-articles-list/news-articles-list.component';
import { NewsArticleFormComponent } from './news-article-form/news-article-form.component';
import { NewsArticleFormModalComponent } from './news-article-form-modal/news-article-form-modal.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';

@NgModule({
  // declarations: [NewsArticleService],
  imports: [
    CommonModule,
    NewsArticleRoutingModule,
    UserModule,
    HttpClientModule,
  ],
  declarations: [
    NewsArticleComponent,
    NewsArticlesListComponent,
    NewsArticleFormComponent,
    NewsArticleFormModalComponent,
    CategoryFormComponent,
    CategoryFormModalComponent
  ],
  // exports: [NewsArticleService],
})
export class NewsArticleModule {}
