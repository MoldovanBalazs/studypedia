import { Component, OnInit } from '@angular/core';
import {Article} from '../models/article';
import {Subject} from '../models/subject';
import {User} from '../models/user';
import {ArticleService} from '../services/article.service';
import {SubjectService} from '../services/subject.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'pm-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  pageTitle = 'Search...';
  _listFilter: string;
  filteredArticles: Article[] = [];
  filteredUsers: User[]= [];
  filteredSubjects: Subject[]= [];
  btn_notes: boolean;
  btn_seminars: boolean;
  btn_labs: boolean;
  btn_exams: boolean;
  btn_users: boolean;
  btn_subjects: boolean;
  shownTable: string;
  public articleList: Article[] = [];
  public userList: User[] = [];
  public subjectList: Subject[]= [];

  get listFilter(): string {
    return this._listFilter;
  }

  getArticles() {
    this.articleService.getArticles().subscribe((result) => {
      this.articleList = result;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
    });
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredArticles = this.performFilterOnArticles(this.listFilter);
    this.filteredUsers = this.performFilterOnUsers(this.listFilter);
    this.filteredSubjects = this.performFilterOnSubjects(this.listFilter);
  }

  constructor(private articleService: ArticleService, private userService : UserService, private subjectService : SubjectService) {
    this.articleService.getArticles().subscribe((result) => {
      this.articleList = result;
    });
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
    });
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });

    this.listFilter = '';
    this.shownTable = 't01';
  }

  showTable(id): void {
    this.shownTable = id;
    const type = this.findType(id);

    this.articleService.getArticleByType(type).subscribe((result) => {
      this.articleList = result;
      this.filteredArticles = this.performFilterOnArticles(this.listFilter);
    });
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
      this.filteredUsers = this.performFilterOnUsers(this.listFilter);
    });
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
      this.filteredSubjects = this.performFilterOnSubjects(this.listFilter);
    });
    // this.updateListFilter(this.listFilter);
  }

  // public updateListFilter(value: string) {
  //   if (this.btn_notes || this.btn_seminars || this.btn_labs || this.btn_exams) {
  //     return this.listFilter ? this.performFilterOnArticles(value) : this.articleList;
  //   } else if (this.btn_users) {
  //     return this.listFilter ? this.performFilterOnUsers(value) : this.userList;
  //   } else if (this.btn_subjects) {
  //     return this.listFilter ? this.performFilterOnSubjects(value) : this.subjectList;
  //   }
  // }

  performFilterOnArticles(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.articleList.filter((article: Article) => (
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.user.username.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }
  performFilterOnUsers(filterBy: string): User[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.userList.filter((user: User) =>
      user.username.toLocaleLowerCase().indexOf(filterBy) !== -1
      || user.university.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSubjects(filterBy: string): Subject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjectList.filter((subject: Subject) =>
      subject.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.getArticles();
    this.getUsers();
    this.getSubjects(); 
  }

  findType(id: any): number {
    switch (id) {
      case 't01' : return 0;
      case 't011' : return 1;
      case 't012' : return 2;
      case 't013' : return 3;
      default: return 0;
    }
  }
}
