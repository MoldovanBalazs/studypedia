import { Component, OnInit, NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-submitentry',
  templateUrl: './submitentry.component.html',
  styleUrls: ['./submitentry.component.css']
})
@NgModule({
  imports: [
    ReactiveFormsModule
  ]
})
export class SubmitentryComponent implements OnInit {

  universityName : string;
  specializationName: string;
  subjectName: string;
  facultyName: string;



  titleName: string;
  detailsName: string;
  specializationName: string;


  constructor( ) {

    }

  ngOnInit() {
  }

}
