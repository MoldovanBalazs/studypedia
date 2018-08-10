import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle = 'Login';
  registerButton = false;
  submitted = false;
  modelLogin2 = new User(1, '', '',  '',  '', '', '');

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }
  loginUser(event) {
    console.log(event);
  }
  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }
}
