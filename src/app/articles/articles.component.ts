import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {NewsfeedComponent} from '../newsfeed/newsfeed.component';
import {CookieService} from 'ngx-cookie-service';
import {ArticleService} from '../services/article.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  article: Article = JSON.parse(this._cookieService.get('articleCookie')) as Article;

  constructor(private _cookieService: CookieService, private articleService: ArticleService) {
    console.log(this.article.id);
  }

  ngOnInit() {
  }

  downloadFile() {
    this.articleService.downloadFileForArticle(this.article.id.toString(), this.article.filename);
  }
}
