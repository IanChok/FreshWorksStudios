import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(private currentService: CurrentService) { }

  ngOnInit() {
    this.currentService.form.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    const data = this.currentService.form.value;
    console.log('data: ', data);
    this.currentService.recordDuckCount(data);
  }
}
