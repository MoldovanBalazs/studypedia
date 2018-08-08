import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { University } from '../models/university';
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
  currentFaculty: string;

  constructor(private universityService: UniversityService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.universities$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.universityService.searchUniversities(term)),
    );
  }

  onSelect(university: University): void {
    if(!university){return;}
    this.currentUniversity = university;
    this.currentFaculty = '';
  }

  addFaculty(newFaculty: string): void {
    this.currentUniversity.faculties.push(newFaculty);
  }

  updateUniversity(): void {
    this.universityService.updateUniversity(this.currentUniversity).subscribe();
  }

}
