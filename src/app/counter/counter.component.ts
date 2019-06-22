import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  coffeeOrder = [];

  coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  constructor(private currentService: CurrentService) { }

  ngOnInit() {
  }

  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) { this.coffeeOrder.splice(index, 1); }
  }

  onSubmit() {
    this.currentService.form.value.time = this.coffeeOrder;
    const data = this.currentService.form.value;

    this.currentService.recordDuckCount(data)
                       .then(res => {
                         console.log('recorded: ', res);
                        });
  }
}
