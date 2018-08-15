import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';

import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInsertUrl = '/insertArticle';
  articleGetByTypeUrl = 'http://localhost:8080/article/type';
  allArticlesUrl = 'http://localhost:8080/article/all';
  articleByIdUrl = 'http://localhost:8080/article/id';

  constructor(private http: HttpClient)  { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.allArticlesUrl);
  }

  insertArticle (title: string, type: number, description: string) {
    const params = new HttpParams()
      .set('title', title)
      .set('type', type.toString())
      .set('description', description);
    this.http.post(this.articleInsertUrl, {params});
  }

  getArticleByType(type: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('type', type.toString());
    return this.http.get<Article[]>(this.articleGetByTypeUrl, {params});
  }

  /*getArticleById(id: number): Observable<Article> {
    const params = new HttpParams()
      .set('id', id.toString());
    return this.http.get<Article>(this.articleByIdUrl, {params});
  }*/
}
