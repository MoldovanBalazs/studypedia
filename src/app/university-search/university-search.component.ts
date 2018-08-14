import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { University, Faculty, Branch, SubjectA, Article } from '../models/university';
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
  
  facultyCounter: number = 1;
  faculties: number[] = [this.facultyCounter];
  currentFaculty: Faculty;
  
  branchCounter: number = 1;
  branches: number[] = [this.branchCounter];
  currentBranch: Branch;
  
  subjectCounter: number = 1;
  subjects: number[] = [this.subjectCounter];
  currentSubject: SubjectA;

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
	this.facultyCounter++;
	this.faculties.push(this.facultyCounter);
  }
  
  decrementFaculties(counter: number): void {
	/*erase the current record from the faculties list:*/
	this.faculties = this.faculties.filter(r => r !== counter);
  }
  
  onFacultySelect(faculty: Faculty): void {
	this.currentFaculty = faculty;
  }
  
  addBranch(newBranchName: string, counter: number): void {
	const newBranch = new Branch();
	newBranch.name = newBranchName;
	this.universityService.addBranch(newBranch, this.currentFaculty.id).subscribe();
	this.currentFaculty.branches.push(newBranch);
	/*erase the current record from the faculties list:*/
	this.branches = this.branches.filter(r => r !== counter);
  }

}
