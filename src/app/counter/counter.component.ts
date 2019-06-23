import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  show = false;

  submitButton;

  options = {hour: 'numeric', minute: 'numeric', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  reactiveForm = new FormGroup({
    time: new FormControl(new Date().toLocaleString('en-US', this.options)),
    food: new FormControl(''),
    location: new FormControl(''),
    numberOfDucks: new FormControl(''),
    foodType: new FormControl(''),
    foodQuantity: new FormControl(''),
  });

  constructor(private currentService: CurrentService) { }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    const data = this.reactiveForm.value;
    console.log('data: ', data);
    this.currentService.recordDuckCount(data);
    this.show = true;
    this.submitButton = true;
  }

  isSubmit() {
    if (this.submitButton === undefined) {
      return !this.reactiveForm.valid;
    } else {
      return this.submitButton;
    }
  }
}
