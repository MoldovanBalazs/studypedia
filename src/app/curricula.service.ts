import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Curricula} from "./curricula";
import { DEADLINES} from "./mock-curricula";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class CurriculaService {

  private curriculaUrl = '';

  constructor(
    private http: HttpClient) { }

  getCurricula(): Observable<Curricula[]> {
    return of(DEADLINES);
  }

  addCurricula(curricula: Curricula): Observable<Curricula> {
    return this.http.post<Curricula>(this.curriculaUrl, curricula, httpOptions);
      /*.pipe(tap((curricula: Curricula) =>
        this.log(`added curricula w/ name = ${curricula.name}`)), catchError(this.handleError<Curricula>('addCurricula')));*/
  }

}

