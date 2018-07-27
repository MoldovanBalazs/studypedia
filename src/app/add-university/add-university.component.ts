import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from '../university';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  currentUniversity: University;
  currentFaculty: string;

  constructor(private universityService: UniversityService) {
    this.currentUniversity = new University();
  }

  ngOnInit() {
  }

  addUniversity(): void {
    this.universityService.universities.push(this.currentUniversity);
  }

  existsUniversity(university: University): boolean {
    return this.universityService.existsUniversity(university);
  }

  addFaculty(): void {
    this.currentUniversity.faculties.push(this.currentFaculty);
  }

}
