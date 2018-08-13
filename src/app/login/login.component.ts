import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cookieValue = 'UNKNOWN';
  registerButton = false;
  submitted = false;
  // modelLogin2 = new User(1, '', '',  '',  '', '', '');
  loggedUser = new User(2, 'virginica', 'root',  'UBB',  'Facultatea de Arhitectura si Urbanism', 'Arhitectura', 1);
  onSubmit() { this.submitted = true; }

  constructor(private _cookieService: CookieService ) {
    this.loggedUser.username = '';
    this.loggedUser.password = '';
  }

  ngOnInit() {
  }
  loginUser(event) {
    this.loggedUser = new User(2, this.loggedUser.username, this.loggedUser.password,  'UBB',
                              'Facultatea de Arhitectura si Urbanism', 'Arhitectura', 1);
    this._cookieService.set( 'userCookie', JSON.stringify(this.loggedUser));
    // this.cookieValue = this._cookieService.get('userCookie');
  }
  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }
}
