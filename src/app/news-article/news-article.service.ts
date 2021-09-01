import { INewsArticle } from './models/news-article.model';
import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IFilterNewsArticlesDto } from './dtos/filter-news-articles-dto';
import { ICreateNewsArticleDto } from './dtos/create-news-article.dto';
import { of } from 'rxjs';


@Injectable()
export class NewsArticleService {
  constructor(private http: HttpClient) { }

  getAll(){
    return of([
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      },
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      },
    ])
  }

  getById(id: number){
    return of(
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      })
  }

  getByFilter(data: IFilterNewsArticlesDto) {
    return of([
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      },
    ])
  }

  create(data: ICreateNewsArticleDto) { // TODO: model dto fazon neki nesto
    // TODO: api call for creating
    return of(
      {
        title: 'Naslov vesti',
        body: 'Content vesti content vesti content vesti',
        createdBy: {
          id: 4,
          name: 'Autor vesti',
          isAdmin: false
        },
        createdAt: new Date(),
        id: 6,
        createdById: 8
      })
  }

}
