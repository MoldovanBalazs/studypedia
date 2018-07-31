import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from '../university';

import { IPageState } from './IPageState';
import { BeginningState } from './BeginningState';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  currentUniversity: University;
  universities: University[] = [];

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
    this.getUniversities();
  }

  addUniversity(): void {
    if(!this.currentUniversity){return;}
    this.universityService.addUniversity(this.currentUniversity)
        .subscribe(university => {
          this.universities.push(this.currentUniversity);
        });
  }

  createNewUniversity(): void {
    this.currentUniversity = new University();
    this.currentUniversity.faculties = [];
  }

  existsUniversity(universityName: string): boolean {
    return false;
  }

  addFaculty(facultyName: string): void {
    this.currentUniversity.faculties.push(facultyName);
  }

  getUniversities(): void {
    this.universityService.getUniversities()
            .subscribe(universities => this.universities = universities);
  }

}
