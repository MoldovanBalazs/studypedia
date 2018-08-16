import {Component, NgModule, OnInit, NgZone, Injector, Injectable} from '@angular/core';
import {User, UserLog} from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
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
import {AuthorizationService} from '../services/authorization.service';
import {University} from '../models/university';
import {Faculty} from '../models/faculty';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@NgModule({
  declarations: [
  AppComponent,
  ]})
@Injectable()
export class LoginComponent implements OnInit {

  pageTitle = 'Login';
  router: Router;
  cookieValue = 'UNKNOWN';
  registerButton = false;
  injector: Injector;
  cookieData = '';
  public user: User;
  userIsValid = true;

  model = new User(18, 'admin', 'admin');
  users: any[] = [
    {
      'username': 'admin2',
      'password': 'admin2'
    }
  ];

  submitted = false;
  loggedUser = new User(2, 'My Name', 'virginica', 'root', new University(), new Faculty(),'bla');
  onSubmit() { this.submitted = true; }


  constructor(private _cookieService: CookieService, router: Router, private authorizationService: AuthorizationService ) {
    this.loggedUser.name = '';
    this.loggedUser.username = '';
    this.loggedUser.password = '';
    this.router = router;
  }


  ngOnInit() {
  }

  loginUser(event) {
    const loggedUser = new UserLog(this.loggedUser.username, this.loggedUser.password);
    const obj = this.authorizationService.validateUser(loggedUser).subscribe((data: User) => {
      console.log('Data is' + data);
      this.user = data as User;
      if ( this.user === null) {
        console.log('null user');
        this.userIsValid = false;
        //this.router.navigateByUrl('/mainmenu');
      } else {
        console.log('Validation log ' + this.user.name);
        this._cookieService.set( 'userCookie', JSON.stringify(this.user));
        this.router.navigateByUrl('/mainmenu');
      }
    });
  }

  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }
}
