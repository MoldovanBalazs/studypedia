import { Injectable } from '@angular/core';
import {USERS} from '../mock-data/mock-users';
import {Observable, of} from 'rxjs';
import {Subject} from '../models/subject';
import {SUBJECTS} from '../mock-data/mock-subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }

  getSubjects(): Observable<Subject[]> {
    return of(SUBJECTS);
  }
}
