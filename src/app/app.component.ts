import { Component, OnInit } from '@angular/core';

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
  people = [
    { name: 'Duncan', age: 24 },
    { name: 'You', age: 35 },
    { name: 'Sam', age: 28 }
  ];

  ngOnInit() {
    console.log('component initiated');
  }

  btnClicked = () => {
    this.counter++;
  };
}
