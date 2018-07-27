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
import {NewsfeedComponent} from './newsfeed/newsfeed.component';
import {ArticlesComponent} from './articles/articles.component';

const routes: Routes = [
      // {path: '', redirectTo: 'webcontent', pathMatch: 'full'},
      // {path: 'showcase', loadChildren: './showcase/showcase.module#ShowcaseModule'},
      {path: 'search', component: ArticleListComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
    ArticleListComponent,
    ArticlesComponent,
    NewsfeedComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
