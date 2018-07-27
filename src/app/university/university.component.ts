import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  universities: University[] = [];
  currentUniversity: University;

  constructor(private universityService: UniversityService) {
    this.currentUniversity = new University();
  }

  ngOnInit() {
  }

  getUniversities(): void {
    this.universityService.getUniversities()
                          .subscribe(universities => this.universities = universities);
  }

}
