import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Deadline} from "../models/deadline";

const URL: string = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInsertUrl = '/insertArticle';
  articleGetByTypeUrl = 'http://localhost:8080/article/type';
  allArticlesUrl = 'http://localhost:8080/article/all';
  articleByIdUrl = 'http://localhost:8080/article/id';

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

  public getPersonalArticles(userId: number): Observable<Article[]> {
    const url = URL + 'user/' + userId.toString() + '/articles';
    return this.http.get<Article[]>(url, {headers: this.headers}).pipe();
  }
}
