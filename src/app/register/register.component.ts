import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //
  /*
  isModerator(): boolean {
    return form.controls['mod'].value;
  }
*/
/*
  toggleMod(event) {
    if ( event.target.checked ) {
      this.isMod = true;
    }
  }
  */

  toggleMod(): void {
    this.modButton = !this.modButton;
  }
}
