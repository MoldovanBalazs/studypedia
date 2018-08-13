import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {User} from "../models/user";
import {CookieBackendService} from "angular2-cookie/services/cookies.backend.service";
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {

  public pageTitle: string = "My profile";
  public contributionHeader : string = "My contributions"

  public name: string = "Muresan Daniel";
  public university: string = "UBB";

  public articleList: Article[] = [];

  public getSessionUser(): User {

    let user: User = JSON.parse(this._cookieService.get('userCookie'));
    //return user;

    let sessionUser: User = new User();
    sessionUser.id = 8;
    return sessionUser;
  }

  constructor(private articleService: ArticleService, private _cookieService: CookieService) {
    // this.articleService.getPersonalArticles(1).subscribe((data: Article[]) => {
    //   this.articleList = data;
    // })


  }

  ngOnInit() {

    this.getArticles();
    console.log(this.articleList);
  }

  getArticles(){
    this.articleService.getPersonalArticles(this.getSessionUser().id).subscribe((result)=>{
      this.articleList = result;
      this.articleList.forEach(item => {
        item.date = new Date();
      })
    })
  }

}
