import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Faculty, University} from './university';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUniversityDataService implements InMemoryDbService {

  universities: University[] = [];

  generateMockUniversities(): void {
    const aUniversity = new University();
    aUniversity.name = 'Universitatea a';
    aUniversity.id = 0;
    const faculty1 = new Faculty();
    faculty1.name = 'Facultatea 1';
    faculty1.id = 0;
    aUniversity.faculties.push(faculty1);

    const bUniversity = new University();
    bUniversity.name = 'Universitatea b';
    bUniversity.id = 1;
    const faculty2 = new Faculty();
    faculty2.name = 'Facultatea 2';
    faculty2.id = 1;
    bUniversity.faculties.push(faculty2);

    this.universities.push(aUniversity);
    this.universities.push(bUniversity);
  }

  constructor() {
    this.generateMockUniversities();
  }

  createDb() {
    const universities = this.universities;
    return {universities};
  }
}
