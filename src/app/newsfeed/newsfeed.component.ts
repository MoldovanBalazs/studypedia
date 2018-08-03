import { Component, OnInit } from '@angular/core';
import { Article} from '../article-list/article';
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

  articleList : Article[] = [
    {
      'id': 1,
      'title': 'Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 2,
      'title': 'Un pormoneu de milioane',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T12:00:00-00:00"),
      'type': 'curs',
      'link': 'somelink',
      'authorLink': 'somelink'
    }
  ]

  // articles : INewsfeed[] = [
  //   {
  //     'id'            : 1,
  //     'title'         : 'Punguta cu doi bani',
  //     'author'        : 'Ramura John',
  //     'date'          : '1 ianuarie 1876',
  //     'articleLink'   : 'url',
  //     'profileLink'   : 'url'
  //   },
  //   {
  //     'id'            : 2,
  //     'title'         : 'Un peroneu de milioane',
  //     'author'        : 'Jutra',
  //     'date'          : '20 februarie 1998',
  //     'articleLink'   : 'url',
  //     'profileLink'   : 'url'
  //   }
  // ];

  ngOnInit() {
  }

}
