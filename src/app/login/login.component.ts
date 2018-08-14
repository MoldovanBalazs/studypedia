import {Component, NgModule, OnInit, NgZone, Injector, Injectable} from '@angular/core';
import { User, UserLog } from 'src/app/models/user';
import {CookieService} from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

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
  userList: User[] = [];

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

  constructor(private _cookieService: CookieService, router: Router, private userService: UserService ) {
    this.loggedUser.username = '';
    this.loggedUser.password = '';
    this.router = router;
  }

  getUsers() {
    this.userService.getUsers().subscribe((result) => {
      this.userList = result;
    });
  }
  ngOnInit() {
    this.getUsers();
  }
  loginUser(event) {

    this.loggedUser = new User(8, this.loggedUser.username, this.loggedUser.password,  'UBB',
                              'Facultatea de Arhitectura si Urbanism', 'Arhitectura', 1);
    this._cookieService.set( 'userCookie', JSON.stringify(this.loggedUser));
    let loginner: UserLog = new UserLog();
    loginner.username = this.loggedUser.username;
    loginner.password = this.loggedUser.password;


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
