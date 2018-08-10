import { Component, OnInit } from '@angular/core';
import { Article} from '../models/article';
import {ArticleService} from '../services/article.service';
//import {INewsfeed} from './INewsfeed';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  pageTitle = 'Welcome, user';
  subscribed = 2;
  user = 'Ion';
  articleList: Article[];

  getArticles() {
    this.articleService.getArticles().subscribe((result) => {
      this.articleList = result;
    });
  }

  constructor(private articleService: ArticleService) {}
  ngOnInit() {
      this.getArticles();
  }

}
