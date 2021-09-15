import { ICategory } from './models/category.model';
import { INewsArticle } from './models/news-article.model';
import { Subject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICreateCategoryDto } from './dtos/create-category.dto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IFilterNewsArticlesDto } from './dtos/filter-news-articles-dto';
import { ICreateNewsArticleDto } from './dtos/create-news-article.dto';
import { config } from '../../config';

const routes = {
  articles: `${config.backendUrl}/api/news-articles`,
  articleById: `${config.backendUrl}/api/news-articles/:id`,
  categories: `${config.backendUrl}/api/categories`,
};

@Injectable()
export class NewsArticleService {
  private filterData: IFilterNewsArticlesDto;
  public newsArticleSubject: Subject<INewsArticle[]>;
  public categorySubject: Subject<ICategory[]>;
  constructor(private readonly http: HttpClient) {
    this.filterData = {
      category: '',
      query: '',
    };
    this.newsArticleSubject = new ReplaySubject(1);
    this.categorySubject = new ReplaySubject(1);
    this.refetchAll();
    this.refetchCategories();
  }

  refetchAll() {
    this.http
      .get<INewsArticle[]>(routes.articles, {
        params: new HttpParams({
          fromObject: this.filterData as any,
        }),
      })
      .subscribe(
        (result) => this.newsArticleSubject.next(result),
        (err) => this.newsArticleSubject.error(err)
      );
  }

  getAll() {
    return this.newsArticleSubject;
  }

  getById(id: number) {
    return this.http.get<INewsArticle>(
      routes.articleById.replace(':id', id.toString())
    );
  }

  filter(data: IFilterNewsArticlesDto) {
    this.filterData = data;
    this.refetchAll();
  }

  create(data: ICreateNewsArticleDto) {
    return this.http.post<INewsArticle>(routes.articles, data).pipe(
      map((data) => {
        this.refetchAll();
        return data;
      })
    );
  }

  createCategory(data: ICreateCategoryDto) {
    return this.http.post<ICategory>(routes.categories, data).pipe(
      map((data) => {
        this.refetchCategories();
        return data;
      })
    );
  }

  getCategories() {
    return this.categorySubject;
  }

  refetchCategories() {
    this.http.get<ICategory[]>(routes.categories).subscribe(
      (result) => this.categorySubject.next(result),
      (err) => this.categorySubject.error(err)
    );
  }
}
