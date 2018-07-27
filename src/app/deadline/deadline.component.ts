import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurriculaService} from "../curricula.service";
import * as angular from 'angular';
import {Curricula, Duration} from "../curricula";


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {

  curricula: Curricula[];

  private countDownDate : any;
  private now;
  private distance;
  private x;

  constructor(private curriculaService: CurriculaService) { }

  ngOnInit() {

    this.getCurricula();

    let array = this.curricula;
    this.curricula.sort((a,b) => {
      if(a.deadline.getTime() >= b.deadline.getTime()) {
        return 1;
      } else {
        return -1;
      }
    });

  }

  getCurricula(){
    this.curriculaService.getCurricula().subscribe((result)=>{
      this.curricula = result;
    })
    //this.curricula.s
  }

  addCurricula(name: string, deadline: Date): void {

    let curricula = new Curricula();
    curricula.name = name;
    curricula.deadline = deadline;
    curricula.timeRemaining = new Duration();

    this.curriculaService.addCurricula(curricula)
      .subscribe(curricula => {
      this.curricula.push(curricula);
    });

    //console.log("Add button event noticed");
  }

  getDuration() {

    for(let curriculaObj of this.curricula){
      this.calculateDuration(curriculaObj);
    }
  }

  calculateDuration(curricula:Curricula):void{
    this.countDownDate = curricula.deadline.getTime();

    this.now = new Date().getTime(); //now
    this.distance = this.countDownDate - this.now; //difference from now

    curricula.timeRemaining.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));
    curricula.timeRemaining.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    curricula.timeRemaining.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
    curricula.timeRemaining.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
  }

  displayCountDown() {
    //this.x = setTimeout(()=>this.getDuration(), 1000);
    this.getDuration();
  }


}
