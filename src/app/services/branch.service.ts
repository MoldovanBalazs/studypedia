import { Injectable } from '@angular/core';
import {Subject} from '../models/subject';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Branch} from '../models/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchService {


  allBranchesUrl = "http://localhost:8080/branch/all";
  constructor(private http: HttpClient) { }

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.allBranchesUrl);
  }
}
