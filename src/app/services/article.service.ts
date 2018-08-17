import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Deadline} from '../models/deadline';
import {User} from '../models/user';

const URL = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInsertUrl = '/insertArticle';
  articleGetByTypeUrl = 'http://localhost:8080/article/type';
  allArticlesUrl = 'http://localhost:8080/article/all';
  articlePutStatusUrl = 'http://localhost:8080/article';
  articleGetByStatusUrl = 'http://localhost:8080/article/status';
  articleByIdUrl = 'http://localhost:8080/articleid';


  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public http: HttpClient)  { }

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
    const url = this.articlePutStatusUrl + '?id=' + id.toString() + '&status=' + status.toString();
    return this.http.put<Article>(url, {});
  }


  public getPersonalArticles(userId: number): Observable<Article[]> {
    const url = URL + 'user/' + userId.toString() + '/articles';
    return this.http.get<Article[]>(url, {headers: this.headers}).pipe();
  }

  getArticleById(articleId: string): Observable<Article> {
    const params = new HttpParams()
      .set('id', articleId);
    return this.http.get<Article>(this.articleByIdUrl, {params});
  }

}
