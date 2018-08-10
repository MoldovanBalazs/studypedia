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
  /*modelMod = new User(18, 'admin', 'admin',  'UBB',  'Facultatea de Matematica si Informatica', 'Informatica', true);
  modelNoMod = new User(19, 'noMod', 'noMod',  'UBB',  'Facultatea de Matematica si Informatica', 'Informatica', false);
*/  submitted = false;
  modelLogin2 = new User(1, '', '',  '',  '', '', '');

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit() {
  }
  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }
}
