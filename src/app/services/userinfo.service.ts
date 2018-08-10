import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  /*used for access control;*/
  moderator = 2;
  none = 0;
  simple = 1;
  admin = 3;

  username = 'none';
  usertype = this.moderator;

  constructor() {

  }

  getUsername(): string {
    return this.username;
  }

  getUsertype(): number {
    return this.usertype;
  }

}
