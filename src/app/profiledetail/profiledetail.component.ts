import { Component, OnInit } from '@angular/core';
import { PersonalService} from "../services/personal.service";
import {Article} from "../models/article";


@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent implements OnInit {

  public pageTitle: string = "My profile";
  public contributionHeader : string = "My contributions"

  public name: string = "Muresan Daniel";
  public university: string = "UBB";

  articleList: Article[];


  constructor(private articleService: PersonalService) { }

  ngOnInit() {
    this.getPersonalArticles();
  }

  getPersonalArticles(){
    this.articleService.getCurricula().subscribe((result)=>{
      this.articleList = result;
    })
  }

}
