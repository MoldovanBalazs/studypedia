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

  constructor() {

    this.generateMockUniversities();

  }

  getUniversities(): Observable<University[]> {
    return of(this.universities);
  }

  generateMockUniversities(): void {

    var aUniversity = new University();
    aUniversity.name = 'Universitatea a';
    aUniversity.id = 0;
    aUniversity.faculties.push('Facultatea 1');
    aUniversity.faculties.push('Facultatea 2');

    var bUniversity = new University();
    bUniversity.name = 'Universitatea b';
    bUniversity.id = 1;
    bUniversity.faculties.push('Facultatea 3');

    var cUniversity = new University();
    cUniversity.name = 'Universitatea c';
    cUniversity.id = 2;
    cUniversity.faculties.push('Facultatea 4');

    this.universities.push(aUniversity);
    this.universities.push(bUniversity);
    this.universities.push(cUniversity);
  }

  getLength(): number {
    return this.universities.length;
  }

}
