import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import { DeadlineComponent } from './deadline/deadline.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
      {path: '', redirectTo: 'webcontent', pathMatch: 'full'},
      {path: 'showcase', loadChildren: './showcase/showcase.module#ShowcaseModule'},
      {path: 'deadline', loadChildren: './showcase/showcase.module#ShowcaseModule'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
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
