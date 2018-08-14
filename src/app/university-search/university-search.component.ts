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
  
  counter: number = 1;
  faculties: number[] = [this.counter];

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

  addFaculty(newFacultyName: string, counter: number): void {
	const newFaculty = new Faculty();
	newFaculty.name = newFacultyName;
	this.universityService.addFaculty(newFaculty, this.currentUniversity.id).subscribe();
	this.currentUniversity.faculties.push(newFaculty);
	/*erase the current record from the faculties list:*/
	this.faculties = this.faculties.filter(r => r !== counter);
  }

  /*
  updateUniversity(): void {
    this.universityService.updateUniversity(this.currentUniversity);
  }*/
  
  incrementFaculties(): void {
	this.counter++;
	this.faculties.push(this.counter);
  }
  
  decrementFaculties(counter: number): void {
	/*erase the current record from the faculties list:*/
	this.faculties = this.faculties.filter(r => r !== counter);
  }

}
