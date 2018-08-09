import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Deadline} from "../models/deadline";
import { DEADLINES} from "../mock-data/mock-deadline";
import {Subscription} from "rxjs/internal/Subscription";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class DeadlineService {

  private curriculaUrl = '';
  private deadlineList: Object[];

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    public http: HttpClient) { }

  getCurricula() : Observable<Deadline[]>{
    const url = 'http://localhost:8080/deadlines';
    return this.http.get<Deadline[]>(url, {headers: this.headers}).pipe();
  }

  addCurricula(curricula: Deadline): Observable<Deadline> {
    return this.http.post<Deadline>(this.curriculaUrl, curricula, httpOptions);
      /*.pipe(tap((curricula: Deadline) =>
        this.log(`added curricula w/ name = ${curricula.name}`)), catchError(this.handleError<Deadline>('addCurricula')));*/
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

