import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from './../header/header.module';
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
import { NewsArticleFormModalComponent, NewsArticleFormComponent } from './news-article-form-modal/news-article-form-modal.component';
import {
  CategoryFormModalComponent,
  CategoryFormComponent,
} from './category-form-modal/category-form-modal.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';

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
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  declarations: [
    NewsArticleComponent,
    NewsArticlesListComponent,
    NewsArticleFormComponent,
    NewsArticleFormModalComponent,
    CategoryFormComponent,
    CategoryFormModalComponent,
  ],
  providers: [NewsArticleService],
  // exports: [NewsArticleService],
})
export class NewsArticleModule {}
