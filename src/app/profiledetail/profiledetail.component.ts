import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {

  public pageTitle: string = "My profile";

  public name: string = "Muresan Daniel";
  public university: string = "UBB";


  constructor() { }

  ngOnInit() {
  }

}
