import { Component, OnInit } from '@angular/core';
import {IArticle} from './article';
import {ISubject} from './subject';
import {IUser} from './user';

@Component({
  selector: 'pm-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    if (this.btn_notes) {
      this.filteredArticles = this.listFilter ? this.performFilterOnNotes(this.listFilter) : this.articles;
    } else if (this.btn_seminars) {
      this.filteredArticles = this.listFilter ? this.performFilterOnSeminars(this.listFilter) : this.articles;
    } else if (this.btn_labs) {
      this.filteredArticles = this.listFilter ? this.performFilterOnLabs(this.listFilter) : this.articles;
    } else if (this.btn_exams) {
      this.filteredArticles = this.listFilter ? this.performFilterOnExams(this.listFilter) : this.articles;
    } else if (this.btn_users) {
      this.filteredArticles = this.listFilter ? this.performFilterOnUsers(this.listFilter) : this.users;
    } else if (this.btn_subjects) {
      this.filteredArticles = this.listFilter ? this.performFilterOnSubjects(this.listFilter) : this.subjects;
    }
  }
  pageTitle = 'Search...';
  _listFilter: string;
  filteredArticles: any[];
  btn_notes: boolean;
  btn_seminars: boolean;
  btn_labs: boolean;
  btn_exams: boolean;
  btn_users: boolean;
  btn_subjects: boolean;

  users: IUser[] = [
    {
      'userId': 1,
      'userName': 'Gigel',
      'university': 'UBB'
    },
    {
      'userId': 2,
      'userName': 'Maria',
      'university': 'UTCN'
    },
    {
      'userId': 3,
      'userName': 'Bob',
      'university': 'UBB'
    },
    {
      'userId': 4,
      'userName': 'Mariuca',
      'university': 'UBB'
    },
  ];
  subjects: ISubject[] = [
    {
      'subjectId': 1,
      'subjectName': 'F.P.',
      'description': 'something'
    },
    {
      'subjectId': 2,
      'subjectName': 'M.A.P',
      'description': 'something more'
    },
    {
      'subjectId': 3,
      'subjectName': 'B.D.',
      'description': 'something with tables'
    }
  ];
  articles: IArticle[] = [
    {
      'articleId': 1,
      'articleName': 'OOP Basics',
      'articleAuthor': 'Gigel',
      'articleType': 'note',
      'articleDate': '24.06.2018'
    },
    {
      'articleId': 2,
      'articleName': 'OOP Advanced',
      'articleAuthor': 'Gigel',
      'articleType': 'note',
      'articleDate': '24.07.2018'
    },
    {
      'articleId': 3,
      'articleName': 'C++',
      'articleAuthor': 'Maria',
      'articleType': 'lab',
      'articleDate': '15.07.2018'
    },
  ];

  constructor() {
    this.filteredArticles = this.articles;
    this.listFilter = '';
  }

  // performFilter(filterBy: string): any[] {
  //   if (this.btn_notes) { return this.performFilterOnNotes(filterBy); }
  //   if (this.btn_seminars) { return this.performFilterOnSeminars(filterBy); }
  //   if (this.btn_labs) { return this.performFilterOnLabs(filterBy); }
  //   if (this.btn_exams) { return this.performFilterOnExams(filterBy); }
  //   if (this.btn_users) { return this.performFilterOnUsers(filterBy); }
  //   if (this.btn_subjects) { return this.performFilterOnSubjects(filterBy); }
  // }
  performFilterOnNotes(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articles.filter((article: IArticle) => article.articleType === 'note' &&
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSeminars(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articles.filter((article: IArticle) => article.articleType === 'seminar' &&
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnLabs(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articles.filter((article: IArticle) => article.articleType === 'lab' &&
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnExams(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articles.filter((article: IArticle) => article.articleType === 'exam' &&
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  performFilterOnUsers(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
      user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSubjects(filterBy: string): ISubject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjects.filter((subject: ISubject) =>
      subject.subjectName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
