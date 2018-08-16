import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, UserLog} from '../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(public httpClient: HttpClient) { }

  // registerUser(user: user) {
  //   const headers = new HttpHeaders().set('content-type',
  //     'application/json');
  //   const body = {
  //     username: user.username, password: user.password, university: user.university,
  //     faculty: user.faculty, branch: user.branch, userType: user.userType
  //   }
  //   return this._http.post<user>('organization/user', user, { headers
  //   });
  // }

  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public validateUser(userLog: UserLog): Observable<User> {
    const url = 'http://localhost:8080/' + 'validate/' + JSON.stringify(userLog);
    return this.httpClient.get<User>(url, {headers: this.headers}).pipe();

  }

}
