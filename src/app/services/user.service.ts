import { Injectable } from '@angular/core';
import {ARTICLES} from '../mock-data/mock-articles';
import {Observable, of} from 'rxjs';
import {Article} from '../models/article';
import {USERS} from '../mock-data/mock-users';
import {User} from '../models/user';

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

  constructor() {

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
    return of(USERS);
  }

}
