import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { IFilterNewsArticlesDto } from './dtos/filter-news-articles-dto';
import { ICreateNewsArticleDto } from './dtos/create-news-article.dto';


@Injectable()
export class NewsArticleService {
  constructor(private http: HttpClient) { }

  getAll(){
    return
  }

  getById(id: number){
    return
  }

  getByFilter(data: IFilterNewsArticlesDto) {
    return
  }

  create(data: ICreateNewsArticleDto) { // TODO: model dto fazon neki nesto
    // TODO: api call for creating
    return
  }

}
