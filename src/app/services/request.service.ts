import { Injectable } from '@angular/core';
import { Request } from '../models/request';
import { REQUESTS } from '../mock-data/mock-requests';
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
