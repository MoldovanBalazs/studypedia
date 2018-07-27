import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pageTitle: string =  'Login';
  imageWidth: number = 50;
  imageMargin: number = 2;
  registerButton: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }
}
