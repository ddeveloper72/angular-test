import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
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
