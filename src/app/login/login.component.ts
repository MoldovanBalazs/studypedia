import {Component, NgModule, OnInit, ViewChild} from '@angular/core';
import { User } from 'src/app/models/user';
import { AppComponent } from 'src/app/app.component';
import {Declaration} from '@angular/compiler/src/i18n/serializers/xml_helper';
import {DeadlineComponent} from '../deadline/deadline.component';
import {MainmenuComponent} from '../mainmenu/mainmenu.component';
import {ProfiledetailComponent} from '../profiledetail/profiledetail.component';
import {RegisterComponent} from '../register/register.component';
import {RequestsComponent} from '../requests/requests.component';
import {RequestDetailComponent} from '../request-detail/request-detail.component';
import {AddUniversityComponent} from '../add-university/add-university.component';
import {AddSubjectComponent} from '../add-subject/add-subject.component';
import {ArticleListComponent} from '../article-list/article-list.component';
import {ArticlesComponent} from '../articles/articles.component';
import {NewsfeedComponent} from '../newsfeed/newsfeed.component';
import {UniversityDetailComponent} from '../university-detail/university-detail.component';
import {UniversitySearchComponent} from '../university-search/university-search.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@NgModule({
  declarations: [
  AppComponent,
  ]})

export class LoginComponent implements OnInit {

  pageTitle = 'Login';
  router: Router;
  registerButton = false;
  model = new User(18, 'admin', 'admin');
  users: any[] = [
    {
      'username': 'admin2',
      'password': 'admin2'
    }
  ];

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }

  loginClick() {

    this.router.navigateByUrl('/mainmenu');
  }
}
