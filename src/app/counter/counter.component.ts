import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  show : boolean=false;

  submitButton;

  constructor(private currentService: CurrentService) { }

  ngOnInit() {
    this.currentService.form.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    const data = this.currentService.form.value;
    console.log('data: ', data);
    this.currentService.recordDuckCount(data);
    this.show=true;
    this.submitButton = true;
  }

  isSubmit() {
    if(this.submitButton === undefined){
      return !this.currentService.form.valid;
    } else {
      return this.submitButton;
    }
  }
}
