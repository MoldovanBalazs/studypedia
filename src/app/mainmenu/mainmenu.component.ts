import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  user: User = JSON.parse(this._cookieService.get('userCookie')) as User;
  constructor(public _cookieService: CookieService) { }

  public logout() {
    this._cookieService.deleteAll('userCookie');
  }

    ngOnInit() {
    console.log(this.user.userType);
  }

}
