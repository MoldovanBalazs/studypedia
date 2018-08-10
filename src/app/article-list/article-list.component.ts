import { Component, OnInit } from '@angular/core';
import {IArticle} from './article';
import {ISubject} from './subject';
import {IUser} from './user';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
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
    }
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
  notes: IArticle[] = [
    {
      'articleId': 1,
      'articleName': 'OOP Basics',
      'articleAuthor': 'Gigel',
      'articleType': 'note',
      'articleDate': '24.06.2018'
    },
    {
      'articleId': 2,
      'articleName': '+OOP Advanced',
      'articleAuthor': 'Gigel',
      'articleType': 'note',
      'articleDate': '24.07.2018'
    },
    {
      'articleId': 3,
      'articleName': 'C++',
      'articleAuthor': 'Maria',
      'articleType': 'note',
      'articleDate': '15.07.2018'
    }
  ];

  seminars: IArticle[] = [
    {
      'articleId': 1,
      'articleName': 'OOP S1',
      'articleAuthor': 'Gigica',
      'articleType': 'seminar',
      'articleDate': '24.06.2018'
    },
    {
      'articleId': 2,
      'articleName': 'MAP S1',
      'articleAuthor': 'Gigel',
      'articleType': 'seminar',
      'articleDate': '7.07.2018'
    },
    {
      'articleId': 3,
      'articleName': 'MAP S2',
      'articleAuthor': 'Maria',
      'articleType': 'seminar',
      'articleDate': '30.07.2018'
    }
  ];

  labs: IArticle[] = [
    {
      'articleId': 1,
      'articleName': 'OOP L1',
      'articleAuthor': 'Gigel',
      'articleType': 'lab',
      'articleDate': '24.06.2018'
    },
    {
      'articleId': 2,
      'articleName': 'OOP L2',
      'articleAuthor': 'Gigel',
      'articleType': 'lab',
      'articleDate': '7.07.2018'
    },
    {
      'articleId': 3,
      'articleName': 'MAP L1',
      'articleAuthor': 'Maria',
      'articleType': 'lab',
      'articleDate': '30.07.2018'
    }
  ];

  exams: IArticle[] = [
    {
      'articleId': 1,
      'articleName': 'OOP 2017',
      'articleAuthor': 'Gigel',
      'articleType': 'exam',
      'articleDate': '24.06.2017'
    },
    {
      'articleId': 2,
      'articleName': 'OOP 2016',
      'articleAuthor': 'Gigel',
      'articleType': 'exam',
      'articleDate': '7.07.2016'
    },
    {
      'articleId': 3,
      'articleName': 'MAP 2018',
      'articleAuthor': 'Maria',
      'articleType': 'exam',
      'articleDate': '30.07.2018'
    }
  ];
  pageTitle = 'Search...';
  _listFilter: string;
  filteredNotes: IArticle[];
  filteredSeminars: IArticle[];
  filteredLabs: IArticle[];
  filteredExams: IArticle[];
  filteredUsers: IUser[];
  filteredSubjects: ISubject[];
  btn_notes: boolean;
  btn_seminars: boolean;
  btn_labs: boolean;
  btn_exams: boolean;
  btn_users: boolean;
  btn_subjects: boolean;

  get listFilter(): string {
    return this._listFilter;
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

  constructor() {
    this.filteredNotes = this.notes;
    this.filteredSeminars = this.seminars;
    this.filteredLabs = this.labs;
    this.filteredExams = this.exams;
    this.filteredUsers = this.users;
    this.filteredSubjects = this.subjects;
    this.listFilter = '';
  }

  showTable(id): void {
    document.getElementById('t01').style.display = 'none';
    document.getElementById('t011').style.display = 'none';
    document.getElementById('t012').style.display = 'none';
    document.getElementById('t013').style.display = 'none';
    document.getElementById('t02').style.display = 'none';
    document.getElementById('t03').style.display = 'none';
    document.getElementById(id).style.display = 'block';
    this.updateListFilter(this.listFilter);
  }

  public updateListFilter(value: string) {
    // console.log('LOG');
    // this._listFilter = value;
    if (this.btn_notes) {
      return this.listFilter ? this.performFilterOnNotes(value) : this.notes;
    } else if (this.btn_seminars) {
      return this.listFilter ? this.performFilterOnSeminars(value) : this.seminars;
    } else if (this.btn_labs) {
      return this.listFilter ? this.performFilterOnLabs(value) : this.labs;
    } else if (this.btn_exams) {
      return this.listFilter ? this.performFilterOnExams(value) : this.exams;
    } else if (this.btn_users) {
      return this.listFilter ? this.performFilterOnUsers(value) : this.users;
    } else if (this.btn_subjects) {
      return this.listFilter ? this.performFilterOnSubjects(value) : this.subjects;
    }
  }

  performFilterOnNotes(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notes.filter((article: IArticle) =>
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.articleAuthor.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSeminars(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.seminars.filter((article: IArticle) =>
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.articleAuthor.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnLabs(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.labs.filter((article: IArticle) =>
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.articleAuthor.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnExams(filterBy: string): IArticle[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.exams.filter((article: IArticle) =>
      article.articleName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.articleAuthor.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  performFilterOnUsers(filterBy: string): IUser[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: IUser) =>
      user.userName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || user.university.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSubjects(filterBy: string): ISubject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjects.filter((subject: ISubject) =>
      subject.subjectName.toLocaleLowerCase().indexOf(filterBy) !== -1
      || subject.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
