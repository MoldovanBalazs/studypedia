import { Component } from '@angular/core';
import {logger} from 'codelyzer/util/logger';
import { CookieService } from 'ngx-cookie-service'


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
  constructor(private _cookieService: CookieService ) {}
  onCreate() {

  }

  getCurrentDate() {
   this.date = new Date();
   return this.date.getDate();
  }
}


