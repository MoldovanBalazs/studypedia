import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ReactiveFormsModule} from "@angular/forms";
import {FormGroup, FormControl } from "@angular/forms";

import { DeadlineComponent } from './deadline/deadline.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import {SubmitentryComponent} from "./submitentry/submitentry.component";


@NgModule({
  declarations: [
    AppComponent,

    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
    SubmitentryComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
