import { Injectable } from '@angular/core';
;
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {USERS} from '../mock-data/mock-users';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*used for access control;*/
  moderator = 2;
  none = 0;
  simple = 1;
  admin = 3;

  username = 'none';
  usertype = this.moderator;
  allUsersUrl = "http://localhost:8080/user/all";
  constructor(private http: HttpClient) {

  }

  ngOnInit(){

  }

  getUsername(): string {
    return this.username;
  }

  getUsertype(): number {
    return this.usertype;
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.allUsersUrl);
  }


}
