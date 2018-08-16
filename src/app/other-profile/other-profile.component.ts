import { Component, Injectable , OnInit } from '@angular/core';
import { Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.component.html',
  styleUrls: ['./other-profile.component.css']
})
export class OtherProfileComponent implements OnInit {

  article: Article;
  router: Router;

  public pageTitle = this.getSessionUser().username + ' profile';
  public contributionHeader = this.getSessionUser().username + ' contributions';

  public name: string;
  public university: string;

  public articleList: Article[] = [];

  constructor(private articleService: ArticleService, router: Router, private _cookieService: CookieService) {
    this.router = router;
    this.name = this.getSessionUser().username;
    this.university = this.getSessionUser().university.name;
  }

  getArticles() {
    this.articleService.getPersonalArticles(this.getSessionUser().id).subscribe((result) => {
      this.articleList = result;
      this.articleList.forEach(item => {
        item.date = new Date();
      });
    });
  }

  public getSessionUser(): User {
    const user: User = JSON.parse(this._cookieService.get('otherUserCookie'));
    return user;
  }

  ngOnInit() {
    this.getArticles();
  }

  articleClick(article: Article) {
    console.log(article.title);
    this._cookieService.set( 'articleCookie', JSON.stringify(article));
    this.router.navigate(['/mainmenu/article', article.id]);
  }

}
