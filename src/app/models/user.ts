import {University} from './university';

export class User {

  public id: number;
  public username: string;
  public password: string;
  public university: University;
  public faculty: string;
  public branch: string;
  public userType?: any;

  constructor(id?: number, username?: string, password?: string, university?: University, faculty?: string, branch?: string, usertype?: any ) {
    this.id = id;
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
}
