import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { DeadlineComponent } from './deadline/deadline.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { UniversityComponent } from './university/university.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversitySearchComponent } from './university-search/university-search.component';

import { AppRoutingModule } from './/app-routing.module';

import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {ArticlesComponent} from './articles/articles.component';
import {RequestsComponent} from './requests/requests.component';
import {RequestDetailComponent} from './request-detail/request-detail.component';
import {AddUniversityComponent} from './add-university/add-university.component';
import {AddSubjectComponent} from './add-subject/add-subject.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'mainmenu', component: MainmenuComponent, children: [
      {path : 'home', component: NewsfeedComponent},
      {path: 'search', component: ArticleListComponent },
      {path: 'requests', component: RequestsComponent },
      {path: 'add-university', component: AddUniversityComponent},
      {path: 'profile', component: ProfiledetailComponent},
      {path: 'article', component: ArticlesComponent}
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
    /*Adrian's part:*/
    RequestsComponent,
    RequestDetailComponent,
    AddUniversityComponent,
    AddSubjectComponent,
    ArticleListComponent,
    ArticlesComponent,
    NewsfeedComponent,
    UniversityDetailComponent,
    UniversitySearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
