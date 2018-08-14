import {Component, Injectable, OnInit} from '@angular/core';
import { Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  pageTitle = 'Welcome, user';
  subscribed = 2;
  user = 'Ion';
  router: Router;
  public id: number;

  article: Article;
  articleList: Article[];

  /*getArticleById(id: number): Article {
    this.articleService.getArticleById(id).subscribe((result) => {
      this.article = result;
    });
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

    this.id = article.id;
    this._cookieService.set( 'articleCookie', JSON.stringify(this.article));
    this.router.navigate(['/mainmenu/article', this.id]);
  }
}
