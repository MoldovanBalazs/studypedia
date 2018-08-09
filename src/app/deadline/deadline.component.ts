import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeadlineService} from "../services/deadline.service";
import * as angular from 'angular';
import {Deadline, Duration} from "../models/deadline";
import {s} from "@angular/core/src/render3";
import DateTimeFormat = Intl.DateTimeFormat;
import {copyObj} from "@angular/animations/browser/src/util";


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit, AfterViewInit {

  curricula: Deadline[] = [];
  list: Array<object> = [];

  private countDownDate : any;
  public now;
  private distance;
  public t;
  public renderable: boolean = true;

  constructor(private curriculaService: DeadlineService) {
    this.curriculaService.getCurricula().subscribe((data: Deadline[]) => {
      this.curricula = data;


      for(let curriculaObj of this.curricula){
        console.log(curriculaObj);
        //curriculaObj.date.setHours(curriculaObj.date.getHours() - 3);
      }
      this.sortDeadlines();
      this.curricula.forEach(item => {
        item.timeRemaining = new Duration();
        item.timeRemaining.days = 0;
        item.timeRemaining.hours = 0;
        item.timeRemaining.minutes = 0;
        item.timeRemaining.seconds = 0;
      });

      this.curricula.forEach(item => {
        console.log(item.timeRemaining.seconds);
      })
    });
  }

  ngOnInit() {
    this.now = new Date().getTime();
    this.displayCountDown();

  }

  getCurricula(): void{
    let array: Array<Deadline> = [];
    this.curriculaService.getCurricula().subscribe((data: Array<Deadline>) => {
      console.log(data);
      data.forEach(item => {this.curricula.push(item);
        console.log(item.name)});
    });
  }


  addCurricula(name: string, deadline: Date): void {

    let curricula = new Deadline();
    curricula.name = name;
    curricula.date = deadline;
   // curricula.timeRemaining = new Duration();

    this.curriculaService.addCurricula(curricula)
      .subscribe(curricula => {
        this.curricula.push(curricula);
      });
  }

  calculateDuration(curricula:Deadline):void{
    this.countDownDate = curricula.date;

    this.now = new Date().getTime();//now
    this.distance = this.countDownDate - this.now; //difference from now

    curricula.timeRemaining.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    setInterval(()=>{
      this.deleteOutdatedDeadlines();
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

  sortDeadlines(): void {
    this.curricula.sort((a,b) => {
      if(a.date >= b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  ngAfterViewInit(): void {

   //console.log("before get");
    //this.getCurricula();
    //console.log("afteer get");

  }
}
