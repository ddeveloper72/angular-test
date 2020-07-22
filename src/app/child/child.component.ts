import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Output() changed = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.changed.emit('Not Bob');
  }
}
