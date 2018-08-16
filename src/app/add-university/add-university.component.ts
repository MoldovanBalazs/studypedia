import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../services/university.service';
import { FacultyService } from '../services/faculty.service';
import { BranchService } from '../services/branch.service';
import { University } from '../models/university';
import {Subject} from '../models/subject';
import {Faculty} from '../models/faculty';
import {Branch} from '../models/branch';
import {SubjectService} from '../services/subject.service';


@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {

  btn_university: boolean;
  btn_faculty: boolean;
  btn_branch: boolean;
  btn_subject: boolean;

  universities: University[] = [];
  faculties: Faculty[] = [];
  branches: Branch[] = [];
  subjects: Subject[] = [];

  shownTable: string;

 /* currentUniversity: University;
  universities: University[] = [];

  facultyCounter: number = 1;
  faculties: number[] = [this.facultyCounter];
  currentFaculty: Faculty;

  branchCounter: number = 1;
  branches: number[] = [this.branchCounter];
  currentBranch: Branch;

  subjectCounter: number = 1;
  subjects: number[] = [this.subjectCounter];
  currentSubject: SubjectA;

  currentFacultyName: string = "";*/

  constructor(private universityService: UniversityService,
              private facultyService: FacultyService,
              private branchService: BranchService,
              private subjectService: SubjectService) {

    this.shownTable = 't01';
    this.getBranches();
    this.getFaculties();
    this.getUniversities();
    this.getSubjects();
  }

  getUniversities() {
    this.universityService.getUniversities().subscribe((result) => {
      this.universities = result;
    });
  }

  getFaculties() {
    this.facultyService.getFaculties().subscribe((result) => {
      this.faculties = result;
    });
  }

  getBranches() {
    this.branchService.getBranches().subscribe((result) => {
      this.branches = result;
    });
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjects = result;
    });
  }
  
  getBranchesBySubject(subject: Subject): string {
	let branchesString = '';
  subject.branches.forEach(branch => {branchesString += branch.name + '; ';});
	return branchesString;
  }

  showTable(id): void {
    this.shownTable = id;
    this.getBranches();
    this.getFaculties();
    this.getUniversities();
    this.getSubjects();
  }

  ngOnInit() {
    this.getUniversities();
    this.getFaculties();
    this.getBranches();
    this.getSubjects();
  }

//   addUniversity(): void {
//     if (!this.currentUniversity || this.currentUniversity.name.length == 0) {return; }
//     this.universityService.addUniversity(this.currentUniversity)
//       .subscribe(university => {
//         this.universities.push(this.currentUniversity);
//       });
//     this.currentUniversity = null;
//   }
//
//   createNewUniversity(): void {
//     this.currentUniversity = new University();
//     this.currentUniversity.faculties = [];
//   }
//
//   existsUniversity(universityName: string): boolean {
//     return false;
//   }
//
//   getFacultyId(): number {
//     return 0;
//   }
//
//   addFaculty(): void {
//     if(this.currentFacultyName.length == 0){
//       return;
//     }
//     const newFaculty = new Faculty();
//     newFaculty.name = this.currentFacultyName;
//
//     this.currentUniversity.faculties.push(newFaculty);
//     this.currentFacultyName = "";
//   }
//
//   switchExistentUniversity(): void {
//     this.currentUniversity = null;
//   }
//
//   incrementFaculties(): void {
// 	  this.faculties.push(this.facultyCounter);
//   }
//
//   decrementFaculties(counter: number): void {
// 	/*erase the current record from the faculties list:*/
// 	this.faculties = this.faculties.filter(r => r !== counter);
//   }
//
//   onFacultySelect(faculty: Faculty): void {
// 	  this.currentFaculty = faculty;
//   }
//
//   addBranch(newBranchName: string, counter: number): void {
// 	const newBranch = new Branch();
// 	newBranch.name = newBranchName;
// 	this.currentFaculty.branches.push(newBranch);
// 	/*erase the current record from the faculties list:*/
// 	this.branches = this.branches.filter(r => r !== counter);
//   }
//
//   incrementBranches(): void {
// 	this.branchCounter++;
// 	this.branches.push(this.branchCounter);
//   }
//
//   decrementBranches(counter: number): void {
// 	/*erase the current record from the branches list:*/
// 	this.branches = this.branches.filter(r => r !== counter);
//   }
//
//   onBranchSelect(branch: Branch): void {
// 	  this.currentBranch = branch;
//   }
//
//   addSubject(newSubjectName: string, counter: number): void {
// 	  const newSubject = new SubjectA();
// 	  newSubject.name = newSubjectName;
// 	  this.currentBranch.subjects.push(newSubject);
// 	  /*erase the current record from the faculties list:*/
// 	  this.subjects = this.subjects.filter(r => r !== counter);
//   }
//
//   incrementSubjects(): void {
// 	  this.subjectCounter++;
// 	  this.subjects.push(this.subjectCounter);
//   }
//
//   decrementSubjects(counter: number): void {
// 	  this.subjects = this.subjects.filter(r => r != counter);
//   }
//
//   deleteFaculty(name: string) {
//     this.currentUniversity.faculties = this.currentUniversity.faculties.filter(f =>f.name !== name);
//   }
}
