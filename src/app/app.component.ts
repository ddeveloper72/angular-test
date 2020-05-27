import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-intro';
  name = 'Duncan';
  today = new Date();

  btnClicked = function() {
    console.log('button has been clicked');
  };
}