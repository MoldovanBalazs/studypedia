import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  university : University;

  constructor(private universityService: UniversityService) {

  }

  ngOnInit() {
  }

}
