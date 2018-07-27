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

  existsUniversity(university: University): boolean {
    if(this.universities.some(function (otherUniversity: University) {
      return otherUniversity.name === university.name;
    })) {
      return true;
    }
    return false;
  }

  replaceExistentUniversity(oldUniversity: University): void {
    this.universities = this.universities.filter(university => university.name !== oldUniversity.name);
    this.universities.push(oldUniversity);
  }

}
