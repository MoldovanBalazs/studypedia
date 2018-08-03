import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { University } from './university';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUniversityDataService implements InMemoryDbService {

  universities: University[] = [];

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

  constructor() {
    this.generateMockUniversities();
  }

  createDb(){
    const universities = this.universities;
    return {universities};
  }
}
