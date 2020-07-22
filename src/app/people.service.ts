import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

newObservable$ = new Observable( observer => {
  observer.next();
});

  people = [
    { name: 'Duncan', age: 24 },
    { name: 'You', age: 35 },
    { name: 'Sam', age: 28 },
    { name: 'John', age: 36 }
  ];

  constructor() {}

  allPeople() {
    // call external API
    return this.people;
  }
}
