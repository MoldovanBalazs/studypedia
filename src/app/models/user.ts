export class User {

  public id: number;
  public username: string;
  public password: string;
  public university: string;
  public faculty: string;
  public branch: string;
  public userType?: any;

  constructor(id?: number, username?: string, password?: string, university?: string, faculty?: string, branch?: string, usertype?: any ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.university = university;
    this.faculty = faculty;
    this.branch = branch;
    this.userType = usertype;
  }
}
