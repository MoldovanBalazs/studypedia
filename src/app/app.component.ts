import {AfterViewInit, Component, Input} from '@angular/core';
// import { Events } from 'ionic-angular';
import {logger} from 'codelyzer/util/logger';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = '#hub';
  name = '';
  date;
  @Input()loginPhase = true;
  someValue;

  constructor(private router: Router, private _cookieService: CookieService) {
    console.log('dsadadsadas1');

  }

  toogle() {
    this.loginPhase = !this.loginPhase;
  }
  getCurrentDate() {
   this.date = new Date();
   return this.date.getDate();
  }

  ngAfterViewInit(): void {
    console.log('dsadadsadas2');
    this.router.navigateByUrl('/login');
  }
}


