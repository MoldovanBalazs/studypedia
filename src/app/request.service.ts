import { Injectable } from '@angular/core';
import { Request } from './request';
import { REQUESTS } from './mock-requests';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getRequests(): Observable<Request[]> {
    return of(REQUESTS);
  }

}
