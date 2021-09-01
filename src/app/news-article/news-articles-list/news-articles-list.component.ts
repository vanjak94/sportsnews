import { INewsArticle } from './../models/news-article.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsArticleService } from '../news-article.service';

@Component({
  selector: 'app-news-articles-list',
  templateUrl: './news-articles-list.component.html',
  styleUrls: ['./news-articles-list.component.css']
})
export class NewsArticlesListComponent implements OnInit {

  constructor(private readonly router: Router, private readonly articlesService: NewsArticleService) {

  }
  public articles?: INewsArticle[]

  ngOnInit(): void {
    this.articlesService.getAll().subscribe((data) => {
      this.articles = data
    })
  }

  redirectToArticle(article: INewsArticle) {
    this.router.navigateByUrl(`/articles/${article.id}`)
  }

}
