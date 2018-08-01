import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurriculaService} from "../curricula.service";
import * as angular from 'angular';
<<<<<<< HEAD
import {Curricula, Duration} from "../curricula";
import {s} from "@angular/core/src/render3";
import DateTimeFormat = Intl.DateTimeFormat;
=======
import {Curricula} from "../curricula";
>>>>>>> master


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {

  curricula: Curricula[];

<<<<<<< HEAD
  private countDownDate : any;
  public now;
  private distance;
  public t;
  public renderable: boolean = false;
=======
  getDuration() {
    for(let curriculaObj of this.curricula){
      this.calculateDuration(curriculaObj);
    }
  }
>>>>>>> master

  calculateDuration(curricula:Curricula):void{
    var countDownDate = curricula.deadline.getTime();

<<<<<<< HEAD
  ngOnInit() {
    this.getCurricula();
    for(let curriculaObj of this.curricula){
      curriculaObj.deadline.setHours(curriculaObj.deadline.getHours() - 3);
    }
    this.sortDeadlines();
    this.displayCountDown();
    // this.now = new Date().getTime();
    this.renderable = true;
=======
    var now = new Date().getTime(); //now
    var distance = countDownDate - now; //difference from now

    curricula.timeRemaining.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    var x = setTimeout(()=>this.getDuration(), 1000);
    console.log(this.curricula);
>>>>>>> master
  }

  constructor(private curriculaService: CurriculaService) { }

  getCurricula(){
    this.curriculaService.getCurricula().subscribe((result)=>{
      this.curricula = result;
    })
  }

<<<<<<< HEAD
  addCurricula(name: string, deadline: Date): void {

    let curricula = new Curricula();
    curricula.name = name;
    curricula.deadline = deadline;
    curricula.timeRemaining = new Duration();

    this.curriculaService.addCurricula(curricula)
      .subscribe(curricula => {
        this.curricula.push(curricula);
      });
  }

  calculateDuration(curricula:Curricula):void{
    this.countDownDate = curricula.deadline.getTime();

    this.now = new Date().getTime();//now
    this.distance = this.countDownDate - this.now; //difference from now

    curricula.timeRemaining.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    setInterval(()=>{
      for(let curriculaObj of this.curricula){
        this.deleteOutdatedDeadlines();
        this.calculateDuration(curriculaObj);
      }
    }, 1000);
  }

  deleteOutdatedDeadlines(): void {
    for(let curriculaObj of this.curricula) {

      if( curriculaObj.deadline.getTime()< this.now ) {
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
      if(a.deadline.getTime() >= b.deadline.getTime()) {
        return 1;
      } else {
        return -1;
      }
    });
  }
=======
  getHeroes(): void {
   this.curriculaService.getCurricula().subscribe(curricula => this.curricula = curricula);
  }

  ngOnInit() {
    this.getHeroes();
    this.getCurricula();
  }

>>>>>>> master
}
