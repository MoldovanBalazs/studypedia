import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  modButton = false;
  universities = ['UTCN', 'UBB',
    'UMF', 'USAMV'];
  faculties = [];
  branches = [];

  submitted = false;

  onSubmit() { this.submitted = true; }
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



  firstDropDownChanged(universities: any) {
    console.log(universities);

    if (universities === 'UTCN') {
      this.faculties = ['Facultatea de Arhitectura si Urbanism', 'Facultatea de Automatica si Calculatoare', 'Facultatea de Constructii',
        'Facultatea de Inginerie Electrica', 'Facultatea de Instalatii', 'Scoala Vietzii'];
    }
    if (universities === 'UBB') {
      this.faculties = ['Facultatea de Matematica si Informatica', 'Facultatea de Drept', 'Facultatea de Litere',
        'Facultatea de Stiinte Economice si Gestiunea Afacerilor', 'Facultatea de Fizica', 'Facultatea de Geografie'];
    }
    if (universities === 'UMF') {
      this.faculties = ['Facultatea de Medicina Generala', 'Facultatea de Medicina Dentara', 'Facultatea de Farmacie'];
    }
    if (universities === 'USAMV') {
      this.faculties = ['Facultatea de Agricultura', 'Facultatea de Medicina Veterinara'];
    }
  }

  secondDropDownChanged(faculties: any) {
    console.log(faculties);
    // UTCN
    if (faculties === 'Facultatea de Arhitectura si Urbanism') {
      this.branches = ['Arhitectura'];
    }
    if (faculties === 'Facultatea de Constructii') {
      this.branches = ['Constructii Civile, Industristale si Agricole', 'Amenajari si constructii hidrotehnice',
        'Inginerie urbana si dezvoltare regionala'];
    }
    if (faculties === 'Facultatea de Automatica si Calculatoare') {
      this.branches = ['Automatica', 'Calculatoare'];
    }

    if (faculties === 'Facultatea de Inginerie Electrica') {
      this.branches = ['Electromecanica', 'Electrotehnica', 'Inginerie medicala'];
    }

    if (faculties === 'Facultatea de Instalatii') {
      this.branches = ['Instalatii pentru constructii'];
    }
    // UBB
    if (faculties === 'Facultatea de Matematica si Informatica') {
      this.branches = ['Matematica', 'Matematica Informatica', 'Informatica'];
    }
    if (faculties === 'Facultatea de Drept') {
      this.branches = ['Drept'];
    }
    if (faculties === 'Facultatea de Litere') {
      this.branches = ['Limbi Moderne Aplicate', 'Literatura comparata', 'Limbi Straine Specilizate'];
    }
    if (faculties === 'Facultatea de Stiinte Economice si Gestiunea Afacerilor') {
      this.branches = ['Informatica Economica', 'Marketing', 'Finante si Banci', 'Economie Generala'];
    }
    if (faculties === 'Facultatea de Fizica') {
      this.branches = ['Fizica', 'Fizica informatica', 'Fizica tehnologica'];
    }
    if (faculties === 'Facultatea de Geografie') {
      this.branches = ['Geografie', 'Cartografie', 'Hidrologie si Meteorologie', 'Geografia turismului'];
    }
    // UMF
    if (faculties === 'Facultatea de Medicina Generala') {
      this.branches = ['Medicina Generala'];
    }
    if (faculties === 'Facultatea de Medicina Dentara') {
      this.branches = ['Tehnica Dentara'];
    }
    if (faculties === 'Facultatea de Farmacie') {
      this.branches = ['Farmacie'];
    }
    // USAMV
    if (faculties === 'Facultatea de Agricultura') {
      this.branches = ['Agricultura', 'Ingineria mediului', 'Montanologie'];
    }

    if (faculties === 'Facultatea de Medicina Veterinara') {
      this.branches = ['Medicina Veterinara'];
    }
  }
}
