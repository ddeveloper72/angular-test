import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  SomeonesName = 'Bob';
  ChangedName = '';

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const ourId = +this.route.snapshot.paramMap.get('id');
    console.log(ourId + ' ✔');
  }

  btnClicked = () => {
    // bring user from this location back to previous location
    this.location.back();
  }

  childChanged = (evt: string) => {
   this.ChangedName = evt;
  }
}
