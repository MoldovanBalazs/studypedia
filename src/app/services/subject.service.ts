import { Injectable } from '@angular/core';

import {Observable, of} from 'rxjs';
import {Subject} from '../models/subject';

import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  allSubjectsUrl = "http://localhost:8080/subject/all";
  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.allSubjectsUrl);
  }
}
