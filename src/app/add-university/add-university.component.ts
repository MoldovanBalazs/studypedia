import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';
import { University } from '../university';

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
  universities: University[];

  constructor(private universityService: UniversityService) {
  }

  ngOnInit() {
    this.getUniversities();
  }

  addUniversity(): void {
    if(this.currentUniversity){
      this.universityService.universities.push(this.currentUniversity);
    }
  }

  createNewUniversity(): void {
    this.currentUniversity = new University();
  }

  existsUniversity(universityName: string): boolean {
    console.log('universities');
    if(this.universities == null){
      this.getUniversities();
    }
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

}
