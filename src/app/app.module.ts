import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { DeadlineComponent } from './deadline/deadline.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import {RouterModule, Routes} from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { UniversitySearchComponent } from './university-search/university-search.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUniversityDataService } from './in-memory-university-data.service';
import { InMemoryRequestDataService } from './in-memory-request-data.service';
import { AppRoutingModule } from './/app-routing.module';

const routes: Routes = [
      // {path: '', redirectTo: 'webcontent', pathMatch: 'full'},
      // {path: 'showcase', loadChildren: './showcase/showcase.module#ShowcaseModule'},
      {path: 'search', component: ArticleListComponent },
      {path: 'requests', component: RequestsComponent },
      {path: 'add-university', component: AddUniversityComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
    ArticleListComponent,
    RequestsComponent,
    RequestDetailComponent,
    UniversityComponent,
    AddUniversityComponent,
    ArticlesComponent,
    NewsfeedComponent,
    UniversityDetailComponent,
    UniversitySearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUniversityDataService, {dataEncapsulation: false}
    ),
    RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
