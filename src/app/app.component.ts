import { Component } from '@angular/core';
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
  someValue;

  onCreate() {

  };

  getCurrentDate() {
   this.date = new Date();
   return this.date.getDate();
  }
}


