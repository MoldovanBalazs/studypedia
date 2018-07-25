import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CurriculaService} from "../curricula.service";
import * as angular from 'angular';
import {Curricula} from "../curricula";


@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.css']
})
export class DeadlineComponent implements OnInit {

  curricula: Curricula[];

  getDuration() {
    for(let curriculaObj of this.curricula){
      this.calculateDuration(curriculaObj);
    }
  }

  calculateDuration(curricula:Curricula):void{
    var countDownDate = curricula.deadline.getTime();

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
  }

  constructor(private curriculaService: CurriculaService) { }

  getCurricula(){
    this.curriculaService.getCurricula().subscribe((result)=>{
      this.curricula = result;
    })
    //this.curricula.s
  }

  getHeroes(): void {
   this.curriculaService.getCurricula().subscribe(curricula => this.curricula = curricula);
  }

  ngOnInit() {
    this.getHeroes();
    this.getCurricula();
  }

}
