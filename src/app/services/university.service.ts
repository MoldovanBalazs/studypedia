import { Injectable } from '@angular/core';
import { UniversityComponent } from '../university/university.component';
import { University, Faculty, Branch, Article, SubjectA } from '../models/university';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  universities: University[] = [];
  currentUniversity: University;
  private universitiesUrl = 'http://localhost:8080/university/all';
  existentUniversity: boolean;
  newUniversity: boolean;
  faculties: Faculty[];

  constructor(private http: HttpClient) {
  }

  /**POST: add a new University to the server;*/
  addUniversity(newUniversity: University): Observable<University> {
	const url = 'http://localhost:8080/insertUniversity';
	let body = JSON.stringify(newUniversity);
    return this.http.post<University>(url, body, httpOptions);
  }
  
  getUniversity(universityId: number): Observable<University> {
	  const url = 'http://localhost:8080/university/' + universityId;
	  return this.http.get<University>(url);
  }

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.universitiesUrl);
  }
  
  getFacultiesByUniversity(universityId): Observable<Faculty[]> {
	  //const url = 'http://localhost:8080/getFacultiesByUniversityId?universityId=' + universityId;
	  if(!universityId){
		  return of([]);
	  }
	  return this.http.get<Faculty[]>(`http://localhost:8080/getFacultiesByUniversityId?universityId=${universityId}`);
  }
  
  addFaculty(newFaculty: Faculty, universityId: number): Observable<Faculty> {
	  const url = `http://localhost:8080/insertFaculty?universityId=${universityId}`;
	  let body = JSON.stringify(newFaculty);
	  return this.http.post<Faculty>(url, body, httpOptions);
  }
  
  searchUniversities(term: string): Observable<University[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<University[]>(`${this.universitiesUrl}?param=${term}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(message);
  }

  /**PUT: update a university;*/
 /* updateUniversity(university: University): Observable<any> {
	const url = 'http://localhost:8080';
	let body = JSON.stringify(university);
    return this.http.put(url, body, httpOptions).pipe();
  }*/
  
  addBranch(newBranch: Branch, facultyId: number): Observable<Branch> {
	const url = `http://localhost:8080/insertBranch?facultyId=${facultyId}`;
	let body = JSON.stringify(newBranch);
	return this.http.post<Branch>(url, body, httpOptions);
  }

}
