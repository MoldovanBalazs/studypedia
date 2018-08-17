import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {NewsfeedComponent} from '../newsfeed/newsfeed.component';
import {CookieService} from 'ngx-cookie-service';
import {ArticleService} from "../services/article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article;

  constructor(private cookieService: CookieService, private articleService: ArticleService) {
    const articleId = this.cookieService.get('articleCookie');
    this.articleService.getArticleById(articleId).subscribe(data => {
      this.article = data;
    });
  }

  ngOnInit() {

  }


}
