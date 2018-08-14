import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeadlineService} from '../services/deadline.service';
import * as angular from 'angular';
import {Deadline, Duration} from '../models/deadline';
import {s} from '@angular/core/src/render3';
import DateTimeFormat = Intl.DateTimeFormat;



@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {

  curricula: Deadline[];

  private countDownDate: any;
  public now;
  private distance;
  public t;
  public renderable = false;

  constructor(private curriculaService: DeadlineService) { }

  ngOnInit() {
    this.getCurricula();
    for (const curriculaObj of this.curricula) {
      curriculaObj.date.setHours(curriculaObj.date.getHours() - 3);
    }
    this.sortDeadlines();
    this.displayCountDown();
    // this.now = new Date().getTime();
    this.renderable = true;
  }

  getCurricula() {
    this.curriculaService.getCurricula().subscribe((result) => {
      this.curricula = result;
    });
  }

  addCurricula(name: string, deadline: Date): void {

    const curricula = new Deadline();
    curricula.name = name;
    curricula.date = deadline;
    curricula.timeRemaining = new Duration();

    this.curriculaService.addCurricula(curricula)
      .subscribe(curricula => {
        this.curricula.push(curricula);
      });
  }

  calculateDuration(curricula: Deadline): void {
    this.countDownDate = curricula.date.getTime();

    this.now = new Date().getTime(); //now
    this.distance = this.countDownDate - this.now; //difference from now

    curricula.timeRemaining.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    setInterval(() => {
      for (const curriculaObj of this.curricula) {
        this.deleteOutdatedDeadlines();
        this.calculateDuration(curriculaObj);
      }
    }, 1000);
  }

  deleteOutdatedDeadlines(): void {
    for (const curriculaObj of this.curricula) {

      if ( curriculaObj.date.getTime() < this.now ) {
        const index: number = this.curricula.indexOf(curriculaObj);
        if ( index !== -1) { // object is in the array
          this.curricula.splice(index, 1);
        }
      }
    }
  }

  checkValidInput(name: string, date: string): boolean {
    const aux = new Date(date);
    if ((name.trim() != '') && (aux.getTime() > Date.now())) {
      return true;
    }
    return false;
  }

  sortDeadlines(): void {
    this.curricula.sort((a, b) => {
      if (a.date.getTime() >= b.date.getTime()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
