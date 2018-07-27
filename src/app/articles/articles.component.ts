import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articleTitle = 'Punguta cu doi bani';
  articleText = 'A fost o data ca niciodata...'

  ngOnInit() {
  }

}
