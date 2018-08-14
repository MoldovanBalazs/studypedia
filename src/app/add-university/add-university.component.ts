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
  
  counter: number = 1;
  faculties: number[] = [this.counter];

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

  addFaculty(facultyName: string, counter: number): void {
    const newFaculty = new Faculty();
    newFaculty.name = facultyName;
	//this.universityService.addFaculty(newFaculty, this.currentUniversity.id).subscribe();
    this.currentUniversity.faculties.push(newFaculty);
	/*erase the current record from the faculties list:*/
	this.faculties = this.faculties.filter(r => r !== counter);
  }

  getUniversities(): void {
    this.universityService.getUniversities()
            .subscribe(universities => this.universities = universities);
  }

  switchExistentUniversity(): void {
    this.currentUniversity = null;
  }
  
  incrementFaculties(): void {
	  this.counter++;
	  this.faculties.push(this.counter);
  }
  
  decrementFaculties(counter: number): void {
	/*erase the current record from the faculties list:*/
	this.faculties = this.faculties.filter(r => r !== counter);
  }

}
