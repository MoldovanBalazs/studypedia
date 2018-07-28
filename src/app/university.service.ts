import { Injectable } from '@angular/core';
import { UniversityComponent } from './university/university.component';
import { University } from './university';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  universities: University[] = [];
  currentUniversity: University;

  constructor() { }

  getCurrentUniversity(): University {
    return this.currentUniversity;
  }

  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }
  addUniversity(university: University): void {
    this.universities.push(university);
  }

  getUniversity(): Observable<University> {

  }

  existsUniversity(universityName: string): boolean {
    if(this.universities.some(function (otherUniversity: University) {
      return otherUniversity.name === universityName;
    })) {
      return true;
    }
    return false;
  }

}
