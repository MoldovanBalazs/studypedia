import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";


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

  public articleList: Article[] = [];


  constructor(private articleService: ArticleService) {
    // this.articleService.getPersonalArticles(1).subscribe((data: Article[]) => {
    //   this.articleList = data;
    // })


  }

  ngOnInit() {

    this.getArticles();
    console.log(this.articleList);
  }

  getArticles(){
    this.articleService.getPersonalArticles(8).subscribe((result)=>{
      this.articleList = result;
      this.articleList.forEach(item => {
        item.releaseDate = new Date();
      })
    })
  }

}
