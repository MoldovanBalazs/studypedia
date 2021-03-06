import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';


import { DeadlineComponent } from './deadline/deadline.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';


import {RouterModule, Routes} from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';

import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversitySearchComponent } from './university-search/university-search.component';
import {SubmitentryComponent} from './submitentry/submitentry.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UniversityComponent } from './university/university.component';

import { AppRoutingModule } from './/app-routing.module';
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {ArticlesComponent} from './articles/articles.component';
import {RequestsComponent} from './requests/requests.component';
import {RequestDetailComponent} from './request-detail/request-detail.component';
import {AddUniversityComponent} from './add-university/add-university.component';
import {AddSubjectComponent} from './add-subject/add-subject.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { OtherProfileComponent } from './other-profile/other-profile.component';
import { CookieService } from 'ngx-cookie-service';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mainmenu', component: MainmenuComponent, children: [
      {path : 'home', component: NewsfeedComponent},
      {path: 'search', component: ArticleListComponent },
      {path: 'requests', component: RequestsComponent },
      {path: 'add-university', component: AddUniversityComponent},
      {path: 'article/:id', component: ArticlesComponent},
      {path: 'profilepage', component: ProfilepageComponent},
      {path: 'otherProfile/:id', component: OtherProfileComponent},
      {path: 'submit', component: SubmitentryComponent}
    ]},
  ];
@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
    LoginComponent,
    RegisterComponent,
    RequestsComponent,
    RequestDetailComponent,
    AddUniversityComponent,
    AddSubjectComponent,
    ArticleListComponent,
    SubmitentryComponent,
    LoginComponent,
    RegisterComponent,
    UniversityComponent,
    ArticlesComponent,
    NewsfeedComponent,
    UniversityDetailComponent,
    UniversitySearchComponent,
    ProfilepageComponent,
    UniversityComponent,
    SubmitentryComponent,
    OtherProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
