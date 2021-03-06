import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent implements OnInit {
  @Input() childTotal: number = 0;
  @Output() incrementTotal = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.incrementTotal.emit(this.childTotal++);
  }
  incrementSelf() {
    this.childTotal++;
  }
}
