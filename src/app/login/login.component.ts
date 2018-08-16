import {Component, NgModule, OnInit, NgZone, Injector, Injectable} from '@angular/core';
import {User, UserLog} from 'src/app/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
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
  pageRenderable = false;

  model = new User(18, 'admin', 'admin');
  users: any[] = [
    {
      'username': 'admin2',
      'password': 'admin2'
    }
  ];

  submitted = false;
  loggedUser = new User(2, 'My Name', 'virginica', 'root', new University(), new Faculty(), 'bla', 1);
  onSubmit() { this.submitted = true; }


  constructor(private _cookieService: CookieService, router: Router, private authorizationService: AuthorizationService ) {

    if(this._cookieService.get('userCookie') !== '') {
      console.log(this._cookieService.get('userCookie'));
      let user: User = JSON.parse(this._cookieService.get('userCookie')) as User;
      const loggedUser = new UserLog(user.username, user.password);
      console.log("MY USER:" + user.name);
      this.authorizationService.validateUser(loggedUser).subscribe((data: User) => {
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

    this.loggedUser.name = '';
    this.loggedUser.username = '';
    this.loggedUser.password = '';
    this.router = router;
  }


  ngOnInit() {
    this.pageRenderable = true;
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
