import { Component, OnInit, NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Category} from '../models/category';
import {FormControl, FormGroup} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {SubmitentryService} from '../submitentry.service';
import {debounce, debounceTime, throttleTime} from 'rxjs/operators';


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
  ]
})
export class SubmitentryComponent implements OnInit {
  categories: string [] = [
    'Notes', 'Seminars', 'Labs', 'Exams'
  ];
  universityName: string;
  branchName: string;
  subjectName: string;
  facultyName: string;



  titleName: string;
  descriptionName: string;



  constructor(private httpClient: HttpClient) {}
  uploadForm = new FormGroup ({
    file1: new FormControl(),
    file2: new FormControl()
  });
  filedata: any;
  fileEvent (e) {
    this.filedata = e.target.files[0];
    console.log(e);
  }
  onSubmit () {
    const formdata = new FormData ();
    console.log(this.uploadForm);
    formdata.append('avatar', this.filedata);
    this.httpClient.post<any>('http://localhost:4200/uploading', formdata)
      .pipe(debounceTime( 300 ))
      .subscribe((res) => {console.log(res); });
    }

  ngOnInit() {
  }

}
