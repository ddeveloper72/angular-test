import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-intro';
  name = 'Duncan';
  today = new Date();
  counter = 0;
  people = [];

  constructor(private peopleService: PeopleService) {}

  customColor = 'grey';

  ngOnInit() {
    this.counter = 2;
    this.people = this.peopleService.allPeople();
  }

  btnClicked = () => {
    this.counter++;
    this.customColor = 'gold';
  };
}
