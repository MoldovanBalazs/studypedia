import { Component, OnInit } from '@angular/core';
import {Article} from './article';
import {Subject} from './subject';
import {User} from './user';

@Component({
  selector: 'pm-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  users: User[] = [
    {
      'id': 1,
      'name': 'Gigel',
      'university': 'UBB'
    },
    {
      'id': 2,
      'name': 'Maria',
      'university': 'UTCN'
    },
    {
      'id': 3,
      'name': 'Bob',
      'university': 'UBB'
    },
    {
      'id': 4,
      'name': 'Mariuca',
      'university': 'UBB'
    }
  ];
  subjects: Subject[] = [
    {
      'id': 1,
      'name': 'F.P.',
      'description': 'something'
    },
    {
      'id': 2,
      'name': 'M.A.P',
      'description': 'something more'
    },
    {
      'id': 3,
      'name': 'B.D.',
      'description': 'something with tables'
    }
  ];

  /*
  public id: number;
  public title: string;
  public author: string;
  public releaseDate: Date;
  public type: string;
  public link: string;
  public authorLink: string;
   */
  notes: Article[] = [
    {
      'id': 1,
      'title': ' notes Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': ' notes Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': 'notes Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    }
  ];

  seminars: Article[] = [
    {
      'id': 1,
      'title': ' seminar Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': ' seminar  Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': ' seminar  Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    }
  ];

  labs: Article[] = [
    {
      'id': 1,
      'title': 'labs Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': 'labs Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': 'labs Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    }
  ];

  exams: Article[] = [
    {
      'id': 1,
      'title': ' exams Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': ' exams Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    },
    {
      'id': 1,
      'title': ' exams Punguta cu doi bani',
      'author': 'Ramura John',
      'releaseDate': new Date("2018-07-31T13:00:00-00:00"),
      'type': 'seminar',
      'link': 'somelink',
      'authorLink': 'somelink'
    }
  ];
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

  performFilterOnNotes(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.notes.filter((article: Article) =>
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }

  performFilterOnSeminars(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.seminars.filter((article: Article) =>
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnLabs(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.labs.filter((article: Article) =>
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnExams(filterBy: string): Article[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.exams.filter((article: Article) =>
      article.title.toLocaleLowerCase().indexOf(filterBy) !== -1
      || article.author.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  performFilterOnUsers(filterBy: string): User[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.users.filter((user: User) =>
      user.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      || user.university.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  performFilterOnSubjects(filterBy: string): Subject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.subjects.filter((subject: Subject) =>
      subject.name.toLocaleLowerCase().indexOf(filterBy) !== -1
      || subject.description.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    console.log('In OnInit');
  }
}
