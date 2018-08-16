import {Injectable} from '@angular/core';
import {SubmitentryComponent} from '../submitentry/submitentry.component';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {University} from '../models/university';
import {Deadline, Duration} from '../models/deadline';
import {Article} from '../models/article';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SubmitentryService {


  addArticle(article: Article, items: FileList): void {

    const uploadUrl = 'http://localhost:8080/submit_entry';
    const body = JSON.stringify(article);
    console.log('BODY' + body);
    this.http.post<Article>(uploadUrl, body, httpOptions)
      .subscribe((val) => {
        console.log('Post successfully item' + val);
        if (typeof items !== 'undefined') {
          const formdata: FormData = new FormData();
          formdata.append('file', items.item(0));

          this.http.post('http://localhost:8080/submit_file/' + val, formdata,
            {headers: new HttpHeaders({})})
            .subscribe(
              (response) => {
                console.log('we received the response : ' + response);
              });
        }
      });
  }


  constructor(
    public http: HttpClient) {
  }
}
