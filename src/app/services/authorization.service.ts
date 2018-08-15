import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
/*
  registerUser(user: user) {
    const headers = new HttpHeaders().set('content-type',
      'application/json');
    const body = {
      username: user.username, password: user.password, university: user.university,
      faculty: user.faculty, branch: user.branch, userType: user.userType
    }
    return this._http.post<user>('organization/user', user, { headers
    });
  }*/
}
