import { NewsArticleService } from './../news-article.service';
import { ICategoryModel } from './../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-article-form',
  templateUrl: './news-article-form.component.html',
  styleUrls: ['./news-article-form.component.css'],
})
export class NewsArticleFormComponent implements OnInit {
  constructor(private articleService: NewsArticleService) {}

  categories?: ICategoryModel[];

  ngOnInit(): void {
    this.articleService.getCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
