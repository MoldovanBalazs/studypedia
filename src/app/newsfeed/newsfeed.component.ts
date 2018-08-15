import {Component, Injectable, OnInit} from '@angular/core';
import { Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

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

  /*getArticleById(id: number): Article {
    this.articleList.forEach( (articol: Article) => {if (articol.id === id) { this.article = articol; }} );
    return this.article;
  }*/

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

    this.article = article;
    this._cookieService.set( 'articleCookie', JSON.stringify(this.article));
    this.router.navigate(['/mainmenu/article', this.article.id]);
  }
}
