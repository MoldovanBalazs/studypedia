import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User, UserLog} from 'src/app/models/user';
import {University} from '../models/university';
import {UniversityService} from '../services/university.service';
import {Deadline} from '../models/deadline';
import {Faculty} from '../models/faculty';
import {Branch} from "../models/branch";
import {UserService} from "../services/user.service";
import {AuthorizationService} from "../services/authorization.service";

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
  public validUsername = false;
  renderable = false;

  onSubmit() {
    this.submitted = true;
    this.userService.checkValidUsername(this.newUser.username).subscribe((data: boolean) => {
      let validUsername = data as boolean;
      console.log("validUsername" + validUsername);
      if(validUsername === true ) {
        this.registerNewUser(this.newUser);
        this.validUsername = true;
      } else {
        this.validUsername = false;
        setTimeout(function () {

        }, 7000);
        window.location.reload();
      }
    })

  }

  constructor(public universityService: UniversityService, public userService: UserService, public authorizationService: AuthorizationService) {
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
