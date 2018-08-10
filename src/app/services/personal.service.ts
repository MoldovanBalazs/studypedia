import { Injectable } from '@angular/core';
import { MYARTICLES} from "../mock-data/mock-articles";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs/index";
import { Article } from '../models/article'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private articleUrl = '';


  constructor(
    private http: HttpClient) { }

  getCurricula(): Observable<Article[]> {
    return of(MYARTICLES);
  }
}
