import { Component, OnInit } from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(public cookieService: CookieService) { }

  public logout() {
    this.cookieService.delete("userCookie");
  }
  ngOnInit() {
  }

}
