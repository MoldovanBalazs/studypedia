import {Component, Injectable, OnInit} from '@angular/core';
import { Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  subscribed = 2;
  router: Router;
  public id: number;

  article: Article;
  articleList: Article[];

  getArticles() {
    this.articleService.getArticles().subscribe((result) => {
      this.articleList = result;
    });
  }

  getId() {
    return this.id;
  }
  constructor(private articleService: ArticleService, router: Router, private _cookieService: CookieService) {
    this.router = router;
  }
  ngOnInit() {
      this.getArticles();
  }

  articleClick(article: Article) {
    this._cookieService.set( 'articleCookie', JSON.stringify(article));
    this.router.navigate(['/mainmenu/article', article.id]);
  }

  userClick(user: User) {
    this._cookieService.set( 'userCookie', JSON.stringify(user));
    this.router.navigate(['/mainmenu/', user.id]);
  }
}
