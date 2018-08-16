import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInsertUrl: string = '/insertArticle';
  articleGetByTypeUrl: string = 'http://localhost:8080/article/type';
  allArticlesUrl: string = 'http://localhost:8080/article/all';
  articlePutStatusUrl = 'http://localhost:8080/article';
  articleGetByStatusUrl = 'http://localhost:8080/article/status';

  constructor(private http: HttpClient)  { }

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

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

  getArticleByStatus(status: number): Observable<Article[]> {
    const params = new HttpParams()
      .set('status', status.toString());
    return this.http.get<Article[]>(this.articleGetByStatusUrl, {params});
  }

  public changeArticleStatus(id: number, status: number): Observable<Article> {
    const params = new HttpParams()
      .set('id', id.toString())
      .set('status', status.toString());
    return this.http.put<Article>(this.articlePutStatusUrl, {params});
  }

}
