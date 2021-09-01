import { NewsArticleService } from './news-article.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModule } from '../user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsArticlesListComponent } from './news-articles-list/news-articles-list.component';
import { NewsArticleFormComponent } from './news-article-form/news-article-form.component';
import { NewsArticleFormModalComponent } from './news-article-form-modal/news-article-form-modal.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryFormModalComponent } from './category-form-modal/category-form-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  // declarations: [NewsArticleService],
  imports: [
    CommonModule,
    UserModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    NewsArticleComponent,
    NewsArticlesListComponent,
    NewsArticleFormComponent,
    NewsArticleFormModalComponent,
    CategoryFormComponent,
    CategoryFormModalComponent
  ],
  providers: [
    NewsArticleService
  ]
  // exports: [NewsArticleService],
})
export class NewsArticleModule {}
