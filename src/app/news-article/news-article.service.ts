import { ICreateCategoryDto } from './dtos/create-category.dto';
import { INewsArticle } from './models/news-article.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFilterNewsArticlesDto } from './dtos/filter-news-articles-dto';
import { ICreateNewsArticleDto } from './dtos/create-news-article.dto';
import { of } from 'rxjs';

@Injectable()
export class NewsArticleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return of([
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false,
          isActive: true,
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8,
        category: 'foo',
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false,
          isActive: true,
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8,
        category: 'foo',
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false,
          isActive: true,
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8,
        category: 'foo',
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false,
          isActive: true,
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8,
        category: 'foo',
      },
    ]);
  }

  getById(id: number) {
    return of<INewsArticle>({
      title: 'Naslov vesti',
      body: 'Content vesti content vesti content vesti',
      createdBy: {
        id: 4,
        name: 'Autor vesti',
        isAdmin: false,
        isActive: true,
      },
      createdAt: new Date(),
      id: 6,
      createdById: 8,
      category: 'foo',
    });
  }

  getByFilter(data: IFilterNewsArticlesDto) {
    return of([
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false,
          isActive: true,
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8,
        category: 'foo',
      },
    ]);
  }

  create(data: ICreateNewsArticleDto) {
    // TODO: model dto fazon neki nesto
    // TODO: api call for creating
    return of({
      title: 'Naslov vesti',
      body: 'Content vesti content vesti content vesti',
      createdBy: {
        id: 4,
        name: 'Autor vesti',
        isAdmin: false,
        isActive: true,
      },
      createdAt: new Date(),
      id: 6,
      createdById: 8,
    });
  }

  createCategory(data: ICreateCategoryDto) {
    return of({
      name: 'fudbal',
    });
  }

  getCategories() {
    return of([
      {
        name: 'football',
      },
      {
        name: 'basketball',
      },
      {
        name: 'baseball',
      },
    ]);
  }
}
