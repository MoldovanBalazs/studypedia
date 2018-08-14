import { Injectable } from '@angular/core';
 import { Request } from '../models/request';

import { REQUESTS } from '../mock-data/mock-requests';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
	const url = 'http://localhost:8080/article/all';
    return this.http.get<Request[]>(url);
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

}
