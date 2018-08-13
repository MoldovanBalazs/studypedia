import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { University, Faculty } from '../models/university';
import { UniversityService } from '../services/university.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.css']
})
export class UniversitySearchComponent implements OnInit {

  universities$: Observable<University[]>;
  private searchTerms = new Subject<string>();
  currentUniversity: University;
  currentFaculty: Faculty;
  faculties$: Observable<Faculty[]>;

  constructor(private universityService: UniversityService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.universities$ = this.searchTerms.pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap((term: string) => this.universityService.searchUniversities(term)),
    );
  }

  onSelect(university: University): void {
    if (!university) {return; }
    this.currentUniversity = university;
  }

  getNewFacultyId(): number {
    return 0;
  }

  addFaculty(newFacultyName: string): void {
	/*if(!this.currentUniversity){ return; }
    const newFaculty = new Faculty();
    newFaculty.name = newFacultyName;
    newFaculty.id = this.getNewFacultyId();
    this.currentUniversity.faculties.push(newFaculty);*/
	const newFaculty = new Faculty();
	newFaculty.name = newFacultyName;
	this.universityService.addFaculty(newFaculty).subscribe();
  }

  updateUniversity(): void {
    this.universityService.updateUniversity(this.currentUniversity);
  }

}
