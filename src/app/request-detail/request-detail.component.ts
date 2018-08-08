import { Component, OnInit, Input } from '@angular/core';
/*will present the content of a selected File/Document;*/
import { Request } from '../models/request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  @Input() request: Request;

  constructor() { }

  ngOnInit() {
  }

}
