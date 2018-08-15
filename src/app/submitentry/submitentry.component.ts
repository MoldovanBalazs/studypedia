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


export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-submitentry',
  templateUrl: './submitentry.component.html',
  styleUrls: ['./submitentry.component.css']
})
@NgModule({
  imports: [
    ReactiveFormsModule,
    NgForm,
    Category,
    FormControl,
    FormGroup,
    HttpClient,
    SubmitentryService,
    SubjectService
  ]
})
export class SubmitentryComponent implements OnInit {
  categories: string[] = [
    'Note', 'Seminar', 'Lab', 'Exam'
  ];
  universityName: string;
  branchName: string;
  subjectName: string;
  facultyName: string;
  selectedCat: string;
  titleName: string;
  descriptionName: string;

  public subjectList: Subject[] = [];

  constructor(private submitentryService: SubmitentryService, private subjectService: SubjectService) {
  }

  uploadForm = new FormGroup({
    file1: new FormControl(),
    file2: new FormControl()
  });
  filedata: any;

  fileEvent(e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }

  getSubjects() {
    this.subjectService.getSubjects().subscribe((result) => {
      this.subjectList = result;
    });
  }

  onSubmit() {
    const formdata = new FormData();
    console.log(this.uploadForm);
    formdata.append('avatar', this.filedata);

    const article = new Article();
    article.articleType = this.selectedCat;
    console.log(' articletype ' + article.articleType);
    article.description = this.descriptionName;
    article.title = this.titleName;
    article.subject = this.subjectName;
    article.userId = 1;
    this.submitentryService.addArticle(article);

  }

  ngOnInit() {
    this.getSubjects();
  }

}
