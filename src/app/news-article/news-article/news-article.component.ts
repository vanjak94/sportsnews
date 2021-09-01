import { NewsArticleService } from './../news-article.service';
import { INewsArticle } from './../models/news-article.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  @Input() article?: INewsArticle;
  @Input() isPreview?: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: NewsArticleService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.articleService.getById(id).subscribe((article) => {
        this.article = article;
      });
    });
  }
}
