import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Deadline} from "../models/deadline";
import { DEADLINES} from "../mock-data/mock-deadline";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class DeadlineService {

  private curriculaUrl = '';

  constructor(
    private http: HttpClient) { }

  getCurricula(): Observable<Deadline[]> {
    return of(DEADLINES);
  }

  addCurricula(curricula: Deadline): Observable<Deadline> {
    return this.http.post<Deadline>(this.curriculaUrl, curricula, httpOptions);
      /*.pipe(tap((curricula: Deadline) =>
        this.log(`added curricula w/ name = ${curricula.name}`)), catchError(this.handleError<Deadline>('addCurricula')));*/
  }

}

