import {Component, Input} from '@angular/core';
import {logger} from 'codelyzer/util/logger';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '#hub';
  name = '';
  date;
  loginPhase: boolean = true;
  someValue;

  onCreate() {

  }

  toogle() {
    this.loginPhase = !this.loginPhase;
  }
  getCurrentDate() {
   this.date = new Date();
   return this.date.getDate();
  }
}


