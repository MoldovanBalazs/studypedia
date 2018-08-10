import { Component, OnInit } from '@angular/core';
import { REQUESTS } from '../mock-data/mock-requests';
import { RequestService } from '../services/request.service';
import { Request } from '../models/request';
import { UserinfoService } from '../services/userinfo.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  /*used for access control;*/
  moderator = 2;
  none = 0;
  simple = 1;
  admin = 3;

  selectedRequest: Request;
  requests: Request[];
  username: string;
  usertype: number;

  constructor(
    private requestService: RequestService,
    private userInfoService: UserinfoService
  ) {
  }

  ngOnInit() {
    this.getRequests();
    this.getUser();
  }

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

  getUser(): void {
    this.username = this.userInfoService.getUsername();
    this.usertype = this.userInfoService.getUsertype();
  }

  onSelect(request: Request): void {
    this.selectedRequest = request;
  }

}
