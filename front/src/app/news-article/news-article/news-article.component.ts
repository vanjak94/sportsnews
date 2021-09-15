import { NewsArticleService } from './../news-article.service';
import { INewsArticle } from './../models/news-article.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '../../utils/helpers';

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css'],
})
export class NewsArticleComponent implements OnInit {
  @Input() article: INewsArticle = {} as INewsArticle;
  @Input() isPreview?: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: NewsArticleService
  ) {}


  editorConfig = {
    editable: false,
    enableToolbar: false,
    showToolbar: false,
    outline: false
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      this.articleService.getById(id).subscribe((article) => {
        this.article = article;
      });
    });
  }

  formatDate(date: Date | string
    | undefined) {
    return formatDate(date)
  }
}
