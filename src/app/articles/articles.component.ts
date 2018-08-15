import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {NewsfeedComponent} from '../newsfeed/newsfeed.component';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article = JSON.parse(this._cookieService.get('articleCookie')) as Article;

  constructor(private _cookieService: CookieService) {
    console.log(this.article.id);
  }
  ngOnInit() {
  }

}
