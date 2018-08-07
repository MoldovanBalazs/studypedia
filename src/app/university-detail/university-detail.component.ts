import { Component, OnInit } from '@angular/core';
import { University } from '../university';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {

  university: University;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
  }

}
