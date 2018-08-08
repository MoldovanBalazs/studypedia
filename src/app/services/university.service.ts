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
  private universitiesUrl = 'api/universities';
  existentUniversity: boolean;
  newUniversity: boolean;

  constructor(private http: HttpClient) {
  }

  /**POST: add a new University to the server;*/
  addUniversity(newUniversity: University): Observable<University> {
    return this.http.post<University>(this.universitiesUrl, newUniversity, httpOptions);
  }

  getUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.universitiesUrl);
  }

  searchUniversities(term: string): Observable<University[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<University[]>(`${this.universitiesUrl}/?name=${term}`);
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

  /**POST: update a university;*/
  updateUniversity(university: University): Observable<any> {
    return this.http.put(this.universitiesUrl, university, httpOptions).pipe();
  }

}
