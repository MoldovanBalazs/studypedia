import { Component, OnInit } from '@angular/core';
import { REQUESTS } from '../mock-data/mock-requests';
import { RequestService } from '../services/request.service';
import { Request } from '../models/request';
import { UserService } from '../services/user.service';
import {ArticleService} from '../services/article.service';
import {Article} from '../models/article';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  // selectedRequest: Article;
  // requests: Article[];
  // username: string;
  // usertype: number;
  pendingArticlesList: Article[] = [];

  constructor( private requestService: RequestService, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getArticleByStatus();
    console.log(this.pendingArticlesList);
  }

  getArticleByStatus() {
  this.articleService.getArticleByStatus(2).subscribe((result) => {
  this.pendingArticlesList = result;
  console.log(result);
  });
    // console.log(this.pendingArticlesList);
  }

  // getRequests(): void {
  //   this.requestService
  //     .getRequests()
  //     .subscribe(requests => this.requests = requests);
  // }

  accept(article: Article): void {
    // this.requests = this.requests.filter(r => r !== request);
  this.articleService.changeArticleStatus(article.id, 1).subscribe(data => console.log(data));
  const indexOfArticle: number = this.pendingArticlesList.indexOf(article);
  this.pendingArticlesList.splice(indexOfArticle, 1);
  console.log(article);
  }

  deny(article: Article): void {
    // this.requests = this.requests.filter(r => r !== request);
    this.articleService.changeArticleStatus(article.id, 0).subscribe(data => console.log(data));
    const indexOfArticle: number = this.pendingArticlesList.indexOf(article);
    this.pendingArticlesList.splice(indexOfArticle, 1);
    console.log(article);
  }

  // onSelect(request: Article): void {
  //   this.selectedRequest = request;
  // }

}
