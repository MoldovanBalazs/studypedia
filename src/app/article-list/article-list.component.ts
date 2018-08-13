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
  filteredNotes: Article[];
  filteredSeminars: Article[];
  filteredLabs: Article[];
  filteredExams: Article[];
  filteredUsers: User[];
  filteredSubjects: Subject[];
  btn_notes: boolean;
  btn_seminars: boolean;
  btn_labs: boolean;
  btn_exams: boolean;
  btn_users: boolean;
  btn_subjects: boolean;
  shownTable: string;
  public artileList: Article[];
  public userList: User[];
  public subjectList: Subject[];

  get listFilter(): string {
    return this._listFilter;
  }

  getArticles(){
    this.articleService.getArticles().subscribe((result) => {
      this.artileList = result;
    });
  }

  getUsers(){
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
    });
  }

  getSubjects(){
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });
  }

  set listFilter(value: string) {
    this._listFilter = value;
    // this.filteredArticles = this.updateListFilter(this.listFilter);
    this.filteredNotes = this.performFilterOnNotes(this.listFilter);
    this.filteredSeminars = this.performFilterOnSeminars(this.listFilter);
    this.filteredLabs = this.performFilterOnLabs(this.listFilter);
    this.filteredExams = this.performFilterOnExams(this.listFilter);
    this.filteredUsers = this.performFilterOnUsers(this.listFilter);
    this.filteredSubjects = this.performFilterOnSubjects(this.listFilter);
  }

  constructor(private articleService : ArticleService, private userService : UserService, private subjectService : SubjectService) {
    this.articleService.getArticles().subscribe((result) => {
      this.artileList = result;
    });
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
    });
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });
    this.filteredNotes = this.performFilterOnNotes('');
    this.filteredSeminars = this.performFilterOnSeminars('');
    this.filteredLabs = this.performFilterOnLabs('');
    this.filteredExams = this.performFilterOnExams('');
    this.filteredUsers = this.performFilterOnUsers('');
    this.filteredSubjects = this.performFilterOnSubjects('');
    this.listFilter = '';
    this.shownTable = 't01';
  }

  showTable(id): void {
    this.shownTable = id;
    this.updateListFilter(this.listFilter);

  }

  public updateListFilter(value: string) {
    // console.log('LOG');
    // this._listFilter = value;
    if (this.btn_notes) {
      return this.listFilter ? this.performFilterOnNotes(value) : this.performFilterOnNotes('');
    } else if (this.btn_seminars) {
      return this.listFilter ? this.performFilterOnSeminars(value) : this.performFilterOnSeminars('');
    } else if (this.btn_labs) {
      return this.listFilter ? this.performFilterOnLabs(value) : this.performFilterOnLabs('');
    } else if (this.btn_exams) {
      return this.listFilter ? this.performFilterOnExams(value) : this.performFilterOnExams('');
    } else if (this.btn_users) {
      return this.listFilter ? this.performFilterOnUsers(value) : this.performFilterOnUsers('');
    } else if (this.btn_subjects) {
      return this.listFilter ? this.performFilterOnSubjects(value) : this.performFilterOnSubjects('');
    }
  }

  performFilterOnNotes(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.artileList.filter((article: Article) =>article.type === 0 && (
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1));

  }

  performFilterOnSeminars(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.artileList.filter((article: Article) => article.type === 1 &&
      (article.title.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
        article.author.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

  performFilterOnLabs(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.artileList.filter((article: Article) => article.type === 2 && (
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }

  performFilterOnExams(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.artileList.filter((article: Article) => article.type === 3 && (
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1));
  }
  performFilterOnUsers(filterBy: string): User[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.userList.filter((user: User) =>
      user.username.toLocaleLowerCase().indexOf(filterBy) !== -1
      || user.university.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSubjects(filterBy: string): Subject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjectList.filter((subject: Subject) =>
      subject.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      || subject.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.getArticles();
    this.getUsers();
    this.getSubjects();
  }
}
