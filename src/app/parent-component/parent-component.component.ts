import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent implements OnInit {
  items = [
    { name: 'macchiato', price: 5 },
    { name: 'americano', price: 3 },
    { name: 'latte', price: 4.5 },
  ];
  total: number = this.findTotal();

  constructor() {}

  ngOnInit(): void {}

  findTotal() {
    // let total = 0;
    // for (let item of this.items) {
    //   total += item.price;
    // }
    const totalPrice = this.items.map((item) => item.price);
    return totalPrice.reduce((a, b) => a + b, 0);
  }
}
