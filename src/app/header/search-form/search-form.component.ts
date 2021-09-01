import { ICategoryModel } from './../../news-article/models/category.model';
import { NewsArticleService } from './../../news-article/news-article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private articlesService: NewsArticleService) {}

  categories?: ICategoryModel[];

  ngOnInit(): void {
    this.articlesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
