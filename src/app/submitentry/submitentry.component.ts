import {Component, OnInit, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Category} from '../models/category';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {SubmitentryService} from '../services/submitentry.service';
import {Article} from '../models/article';
import {Subject} from '../models/subject';
import {SubjectService} from '../services/subject.service';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../models/user';


export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-submitentry',
  templateUrl: './submitentry.component.html',
  styleUrls: ['./submitentry.component.css']
})

export class SubmitentryComponent implements OnInit {
  categories: string[] = [
    'Note', 'Seminar', 'Lab', 'Exam'
  ];
  subjectName: string;
  selectedCat: string;
  titleName: string;
  descriptionName: string;
  selectedFiles: FileList;
  public message = '';

  public subjectList: Subject[] = [];


  constructor(private submitentryService: SubmitentryService, private subjectService: SubjectService,
              private _cookieService: CookieService) {
  }

  uploadForm = new FormGroup({
    file1: new FormControl(),
    file2: new FormControl()
  });
  filedata: any;

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });
  }

  onSubmit() {
    console.log(this.uploadForm);

    const article = new Article();
    article.articleType = this.selectedCat;
    console.log(' articletype ' + article.articleType);
    article.description = this.descriptionName;
    article.title = this.titleName;
    article.subject = this.subjectName;
    article.userId = this.getSessionUser().id;
    this.submitentryService.addArticle(article, this.selectedFiles);
    this.message = 'Successful submit';
    setTimeout(function () {
    }, 5000);
    this.message = '';
    window.location.reload();
  }

  public getSessionUser(): User {
    return JSON.parse(this._cookieService.get('userCookie')) as User;
  }

  ngOnInit() {
    this.getSubjects();
  }

}
