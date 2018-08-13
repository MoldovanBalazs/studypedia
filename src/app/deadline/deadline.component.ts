///<reference path="../../../node_modules/@types/jasmine/index.d.ts"/>
import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeadlineService} from "../services/deadline.service";
import * as angular from 'angular';
import {Deadline, Duration} from "../models/deadline";
import {s} from "@angular/core/src/render3";
import DateTimeFormat = Intl.DateTimeFormat;
import {copyObj} from "@angular/animations/browser/src/util";
import {User} from "../models/user";
import {constructDependencies} from "@angular/core/src/di/reflective_provider";


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {

  curricula: Deadline[] = [];
  private countDownDate : any;
  public now;
  private distance;
  public t;
  public renderable: boolean = false;

  public getUser(): User {
    var user = new User();
    user.id = 8;
    return user;
  }

  constructor(private deadlineService: DeadlineService) {

    this.deadlineService.getUserDeadlines(this.getUser().id).subscribe((data: Deadline[]) => {
      this.curricula = data;
      this.curricula.forEach(item => {
        item.timeRemaining = new Duration();
      });
      this.renderable = true;
    });
  }

  ngOnInit() {
    this.now = new Date().getTime();
    this.displayCountDown();
  }

  getDeadlines(): void{

    this.deadlineService.getUserDeadlines(this.getUser().id).subscribe((data: Deadline[]) => {
      this.curricula = data;
      this.curricula.forEach(item => {
        item.timeRemaining = new Duration();
      });
    });
  }


  addCurricula(name: string, date: Date): void {

    let deadline = new Deadline();
    deadline.name = name;
    deadline.date = date;
    deadline.user = this.getUser();
    this.deadlineService.addDeadline(deadline, this.curricula);
  }

  calculateDuration(curricula:Deadline):void{
    this.countDownDate = new Date(curricula.date).getTime();

    this.now = new Date().getTime();
    this.distance = this.countDownDate - this.now;

    curricula.timeRemaining.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    setInterval(()=>{
      for(let curriculaObj of this.curricula){
        this.calculateDuration(curriculaObj);
      }
    }, 1000);
  }

  deleteOutdatedDeadlines(): void {
    for(let curriculaObj of this.curricula) {

      if( curriculaObj.date< this.now ) {
        let index: number = this.curricula.indexOf(curriculaObj);
        if( index != -1){ //object is in the array
          this.curricula.splice(index, 1);
        }
      }
    }
  }

  checkValidInput(name: string, date: string): boolean {
    let aux = new Date(date);
    if((name.trim() != '') && (aux.getTime() > Date.now())){
      return true;
    }
    return false;
  }

  sortDeadlines(): Deadline[] {
    let list: Deadline[] = this.curricula;
    return list.sort((a,b) => {
      if(a.date >= b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  deleteDeadline(deadline: Deadline) {
    let index: number = this.curricula.indexOf(deadline);
    console.log(deadline.id);
    if( index != -1) {
      this.deadlineService.deleteDeadline(deadline);
      this.curricula.splice(index, 1);
    }
  }

}
