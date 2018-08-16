import {University} from './university';
import {Faculty} from './faculty';

export class User {

  public id: number;
  public name: string;
  public username: string;
  public password: string;
  public university: University;
  public faculty: Faculty;
  public branch: string;
  public userType?: any;

  constructor(id?: number, name?: string,
              username?: string, password?: string,
              university?: University, faculty?: Faculty, branch?: string, usertype?: any ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.password = password;
    this.university = university;
    this.faculty = faculty;
    this.branch = branch;
    this.userType = usertype;
  }
}

export class UserLog {
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
