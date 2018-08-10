import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Deadline, Duration} from "../models/deadline";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root'})
export class DeadlineService {

  private curriculaUrl = '';
  private deadlineList: Object[];

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    public http: HttpClient) { }

  getDeadlines() : Observable<Deadline[]>{
    const url = 'http://localhost:8080/deadlines';
    return this.http.get<Deadline[]>(url, {headers: this.headers}).pipe();
  }

  getUserDeadlines(userId: number) : Observable<Deadline[]>{
    const url = 'http://localhost:8080/user/' + userId + '/deadlines';
    return this.http.get<Deadline[]>(url, {headers: this.headers}).pipe();
  }

  addDeadline(deadline: Deadline, deadlineList: Deadline[]): void{

    let body = JSON.stringify(deadline); console.log("BODY" + body);
    const url = 'http://localhost:8080/insert/';
    this.http.post<Deadline>(url, body, httpOptions)
      .subscribe((val) => {
        console.log("Post successfully item" + val);
        val.timeRemaining = new Duration();
        deadlineList.push(val as Deadline);
        deadlineList.sort((a,b) => {
            if(a.date >= b.date) {
              return 1;
            } else {
              return -1;
            }
          });
        //calculateDuration(val);
        console.log("LIST" + deadlineList);
      });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

