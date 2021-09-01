import { NewsArticleComponent } from './news-article/news-article/news-article.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsArticlesListComponent } from './news-article/news-articles-list/news-articles-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsArticlesListComponent
  },
  {
    path: 'articles/:id',
    component: NewsArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
