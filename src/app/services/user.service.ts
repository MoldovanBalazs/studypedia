import { Injectable } from '@angular/core';
import {ARTICLES} from '../mock-data/mock-articles';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
// import {USERS} from '../mock-data/mock-users';
import {User, UserLog} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {OnInit} from '@angular/core';

const URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  /*used for access control;*/
  moderator = 2;
  none = 0;
  simple = 1;
  admin = 3;

  username = 'none';
  usertype = this.moderator;
  allUsersUrl = 'http://localhost:8080/user/all';


  constructor(public http: HttpClient) {


  }

  ngOnInit() {

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
