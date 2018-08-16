import { Injectable } from '@angular/core';
import {Subject} from '../models/subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Faculty} from '../models/faculty';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {


  allFacultiesUrl = "http://localhost:8080/faculty/all";
  constructor(private http: HttpClient) { }

  getFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.allFacultiesUrl);
  }
}
