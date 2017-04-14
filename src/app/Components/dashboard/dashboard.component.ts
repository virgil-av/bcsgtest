import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../Services/api.service";

@Component({
  selector: 'bcsg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedAuthor: string;
  authorDetails: any[] = [];
  anyError: Error;

  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.changeAuthor('Hemingway')
  }

  changeAuthor(author: string){
    this.selectedAuthor = author;
    this._apiService.getAuthor(author)
      .subscribe(response => {
          this.authorDetails = response.results;
        },
        error => this.anyError = error
      )
  }

  bookIsFree(price: number){
    return price === 0.00;
  }

}
