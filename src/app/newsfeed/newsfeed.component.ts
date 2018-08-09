import { Component, OnInit } from '@angular/core';
import {INewsfeed} from './INewsfeed';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  pageTitle = 'Welcome, user';
  subscribed = 2;
  user = 'Ion';
  articles : INewsfeed[] = [
    {
      'id'            : 1,
      'title'         : 'Punguta cu doi bani',
      'author'        : 'Ramura John',
      'date'          : '1 ianuarie 1876',
      'articleLink'   : 'url',
      'profileLink'   : 'url',
      'releaseDate'   : new Date()
      },
    {
      'id'            : 2,
      'title'         : 'Un peroneu de milioane',
      'author'        : 'Jutra',
      'date'          : '20 februarie 1998',
      'articleLink'   : 'url',
      'profileLink'   : 'url',
      'releaseDate'   : new Date()
    }
  ];

  ngOnInit() {
  }

}
