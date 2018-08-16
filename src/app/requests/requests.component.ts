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

  selectedRequest: Request;
  requests: Request[];
  username: string;
  usertype: number;
  pendingArticlesList: Article[] = [];

  constructor( private requestService: RequestService, private articleService: ArticleService) {
  }

  ngOnInit() {
    this.getRequests();
    this.getArticleByStatus();
  }
  getArticleByStatus() {
  this.articleService.getArticleByStatus(2).subscribe((result) => {
  this.pendingArticlesList = result;
}); }
  getRequests(): void {
    this.requestService
      .getRequests()
      .subscribe(requests => this.requests = requests);
  }

  accept(request: Request): void {
    this.requests = this.requests.filter(r => r !== request);
  }

  deny(request: Request): void {
    this.requests = this.requests.filter(r => r !== request);
  }

  onSelect(request: Request): void {
    this.selectedRequest = request;
  }

}
