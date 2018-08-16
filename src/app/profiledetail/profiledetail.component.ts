import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {ArticleService} from '../services/article.service';
import {User} from '../models/user';
import {CookieBackendService} from 'angular2-cookie/services/cookies.backend.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {

  public pageTitle = 'My profile';
  public contributionHeader = 'My contributions';
  article: Article;
  router: Router;

  public name: string;
  public university: string;

  public articleList: Article[] = [];

  public getSessionUser(): User {
    const user: User = JSON.parse(this._cookieService.get('userCookie'));
    return user;
  }



  getArticles() {
    this.articleService.getPersonalArticles(this.getSessionUser().id).subscribe((result) => {
      this.articleList = result;
      this.articleList.forEach(item => {
        item.date = new Date();
      });
    });
  }

  constructor(private articleService: ArticleService, private _cookieService: CookieService, router: Router) {
    this.router = router;
    this.name = this.getSessionUser().username;
    this.university = this.getSessionUser().university.name;

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
