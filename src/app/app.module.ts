import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { DeadlineComponent } from './deadline/deadline.component';

import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';

/*Adrian's part:*/
/*requests:*/
import { RequestsComponent } from './requests/requests.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
/*add university:*/
import { AddUniversityComponent } from './add-university/add-university.component';
import { UniversityComponent } from './university/university.component';

@NgModule({
  declarations: [
    AppComponent,
    DeadlineComponent,
    MainmenuComponent,
    ProfiledetailComponent,
    /*Adrian's part:*/
    RequestsComponent,
    RequestDetailComponent,
    AddUniversityComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
