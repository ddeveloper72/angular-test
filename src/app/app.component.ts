import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'angular-intro';
  name = 'Duncan';
  today = new Date();
  counter = 0;
  people = [];
  customColor = 'grey';

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.counter = 2;
    this.people = this.peopleService.allPeople();

    this.peopleService.newObservable$.subscribe(
      data => {
        console.log('Observable data goes here: ', data);
      },
      error => {
        console.log('❌ error');
      }
    );
  }

  btnClicked = () => {
    this.counter ++;
    this.customColor = 'gold';
  }
}
