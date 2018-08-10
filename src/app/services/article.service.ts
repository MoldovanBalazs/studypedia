import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {ARTICLES} from '../mock-data/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(ARTICLES);
  }
}
