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

  currentUniversityName: string;
  currentUniversity: University;
  currentFaculty: string;
  universitySelected: boolean = false;
  universities: University[] = [];
  pageState: IPageState;

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
    this.getUniversities();
  }

  addUniversity(): void {
    if(this.currentUniversity){
      //this.universityService.universities.push(this.currentUniversity);
      this.universities.push(this.currentUniversity);
      this.currentUniversity = null;
      this.currentUniversityName = '';
      this.currentFaculty = '';
      this.universityService.universities.push(this.currentUniversity);
    }
  }

  createNewUniversity(): void {
    this.currentUniversity = new University();
    this.currentUniversity.faculties = [];
    this.currentUniversity.name = this.currentUniversityName;
  }

  existsUniversity(universityName: string): boolean {
    if(this.universities.length === 0){
      return false;
    }
    if(this.universities.find(university => university.name === universityName)){
      return true;
    }
    return false;
  }

  addFaculty(): void {
    if(this.currentUniversity){
      this.currentUniversity.faculties.push(this.currentFaculty);
    }
  }

  getUniversities(): void {
    this.universityService.getUniversities()
            .subscribe(universities => this.universities = universities);
  }

  emptyName(): boolean {
    if(this.currentUniversityName === ''){
      this.currentUniversity = null;
      return true;
    }
    return false;
  }

}
