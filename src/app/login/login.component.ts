import {Component, NgModule, OnInit, NgZone, Injector, Injectable} from '@angular/core';
import { User } from 'src/app/models/user';
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

  model = new User(18, 'admin', 'admin');
  users: any[] = [
    {
      'username': 'admin2',
      'password': 'admin2'
    }
  ];

  submitted = false;
  // modelLogin2 = new User(1, '', '',  '',  '', '', '');
  loggedUser = new User(2, 'virginica', 'root',  'UBB',  'Facultatea de Arhitectura si Urbanism', 'Arhitectura', 1);
  onSubmit() { this.submitted = true; }


  constructor(private _cookieService: CookieService, router: Router ) {
    this.loggedUser.username = '';
    this.loggedUser.password = '';
    this.router = router;
  }


  ngOnInit() {
  }
  loginUser(event) {
    this.loggedUser = new User(2, this.loggedUser.username, this.loggedUser.password,  'UBB',
                              'Facultatea de Arhitectura si Urbanism', 'Arhitectura', 1);
    this._cookieService.set( 'userCookie', JSON.stringify(this.loggedUser));
    // this.cookieValue = this._cookieService.get('userCookie');
    this.router.navigateByUrl('/mainmenu');
  }

  toggleRegister(): void {
    this.registerButton = !this.registerButton;
  }

  /*loginClick() {

    // const ngZone = this.injector.get(NgZone);
    // const routerService = this.injector.get(Router);
    // ngZone.run(() => {
    //   routerService.navigate(['/mainmenu'], {skipLocationChange: true});
    //   });
    console.log('test');
    this.router.navigateByUrl('/mainmenu');
  }*/
}
