import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/user';
import {University} from '../models/university';
import {UniversityService} from '../services/university.service';
import {Deadline} from '../models/deadline';
import {Faculty} from '../models/faculty';
import {Branch} from "../models/branch";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  modButton = false;
  registerButton = false;
  public newUser: User;
  modPass = false;
  public universityList: University[] = [];
  public facultyList: Faculty[] = [];
  public branchList: Branch[] = [];
  public moderatorPassword: string;

  submitted = false;
  invalidUsername = false;
  renderable = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(public universityService: UniversityService, public userService: UserService) {
    this.newUser = new User();
    this.universityService.getUniversityList().subscribe((data: University[]) => {
      data.forEach(item => {
        let uni = new University();
        uni = item;
        this.universityList.push(item as University);
        console.log(item);
      });
    });
  }
  ngOnInit() {  }

  registerUser(event) {
    // if (this.modPass) {
    //   this.newUser.userType = 1;
    // } else {
    //   this.newUser.userType = 0;
    // }
    // this.newUser = new User(17, this.newUser.name, this.newUser.username, this.newUser.password,  this.newUser.university,
    //                                 this.newUser.faculty, this.newUser.branch, this.newUser.userType);
  }
  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }

  public registerNewUser(user: User) {
    this.userService.addUser(user);
  }


  toggleMod(): void {
    this.modButton = !this.modButton;
  }
  validateModerator(password: string): void {
    if (password === "moderator") {
      this.newUser.userType = 1;
    } else {
      this.newUser.userType = 0;
    }
  }

  firstDropDownChanged(universities: any) {
        this.facultyList.splice(0, this.facultyList.length)
       this.universityService.getUniversityFaculties(this.newUser.university.id).subscribe((data: Faculty[]) => {
        // this.universityList = data as University[];
        data.forEach(item => {
          let uni = new Faculty();
          uni = item;
          this.facultyList.push(item as Faculty);
          console.log(item);
        });
      }
    );

  }

  secondDropDownChanged(faculties: any) {
    this.branchList.splice(0, this.facultyList.length)
    this.universityService.getFacultyBranches(this.newUser.faculty.id).subscribe((data: Branch[]) => {
        // this.universityList = data as University[];
        data.forEach(item => {
          let branch = new Branch();
          branch = item;
          this.branchList.push(branch as Branch);
          console.log(item);
        });
      }
    );

    // console.log("new user" + this.newUser.name + " " + this.newUser.username + " " + this.newUser.password + " " + this.newUser.university.name + " " + this.newUser.faculty.name + " " + this.newUser.branch);
  }

  public usernameIsValid(username: string): any {
    this.userService.checkValidUsername(username).subscribe((data: boolean) => {
      return data;
    });
  }

}
