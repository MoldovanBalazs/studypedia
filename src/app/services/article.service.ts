import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {ARTICLES} from '../mock-data/mock-articles';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleInsertUrl: string = "/insertArticle";
  articleGetByType : string = "/typeArticle";

  constructor(private http: HttpClient)  { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }

  insertArticle (title: string, type: string, description: string) {
    const params = new HttpParams()
      .set('title', title)
      .set('type', type)
      .set('description', description);
    this.http.post(this.articleInsertUrl, {params});
  }

  getArticleByType(type: string): Observable<Article[]>{
    const params = new HttpParams()
      .set('type', type)
    return this.http.get<Article[]>(this.articleGetByType, {params});
  }
}
