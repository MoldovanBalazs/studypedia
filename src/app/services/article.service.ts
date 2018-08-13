import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Article} from "../models/article";
import {Observable} from "rxjs/internal/Observable";
import {Deadline} from "../models/deadline";

const URL: string = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(public httpClient: HttpClient) { }

  public getPersonalArticles(userId: number): Observable<Article[]> {
    const url = URL + 'user/' + userId + '/articles';
    return this.httpClient.get<Article[]>(url, {headers: this.headers}).pipe();
  }
}
