import { Injectable } from '@angular/core';
import { UniversityComponent } from '../university/university.component';
import { University } from '../models/university';
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
  updateUniversity(university: University): Observable<any> {
	const url = 'http://localhost:8080';
	let body = JSON.stringify(university);
    return this.http.put(url, body, httpOptions).pipe();
  }

}
