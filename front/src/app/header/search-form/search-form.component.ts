import { ICategory } from './../../news-article/models/category.model';
import { NewsArticleService } from './../../news-article/news-article.service';
import { Component, OnInit } from '@angular/core';
import { IFilterNewsArticlesDto } from '../../news-article/dtos/filter-news-articles-dto';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  constructor(private articlesService: NewsArticleService) {}

  categories?: ICategory[];

  searchFormData: IFilterNewsArticlesDto = {
    query: '',
    category: ''
  }

  ngOnInit(): void {
    this.articlesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  submit(data: IFilterNewsArticlesDto) {
    this.articlesService.filter(data)
  }
}
