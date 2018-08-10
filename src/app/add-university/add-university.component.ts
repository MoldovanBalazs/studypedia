import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university.service';
import { University, Faculty } from '../models/university';


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
    if (!this.currentUniversity) {return; }
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

  getFacultyId(): number {
    return 0;
  }

  addFaculty(facultyName: string): void {
    const newFaculty = new Faculty();
    newFaculty.name = facultyName;
    newFaculty.id = this.getFacultyId();
    this.currentUniversity.faculties.push(newFaculty);
  }

  getUniversities(): void {
    this.universityService.getUniversities()
            .subscribe(universities => this.universities = universities);
  }

  switchExistentUniversity(): void {
    this.currentUniversity = null;
  }

}
