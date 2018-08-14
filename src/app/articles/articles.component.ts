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

  article: Article = JSON.parse(this._cookieService.get('userCookie')) as Article;
  id: number;


  constructor(private newsfeed: NewsfeedComponent, private _cookieService: CookieService) {
    this.id = this.newsfeed.id;
    console.log(this.article.id);
    //this.article = this.newsfeed.getArticleById(this.id);

  }
  ngOnInit() {
  }

}
