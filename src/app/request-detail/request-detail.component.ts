import { Component, OnInit, Input } from '@angular/core';
/*will present the content of a selected File/Document;*/
import { Article } from '../models/article';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }


}
