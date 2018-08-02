import { Injectable } from '@angular/core';
import { Request } from './request';
import { REQUESTS } from './mock-requests';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requestsUrl = 'api/requests';

  constructor(private http: HttpClient) { }

  getRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(this.requestsUrl).pipe(
      tap(requests => this.log('fetched requests')),
      catchError(this.handleError('getRequests', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error),
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    console.log(message);
  }

}
