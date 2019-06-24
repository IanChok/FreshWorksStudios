import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  duckCount;

  constructor(private curService: CurrentService) { }

  ngOnInit() {
    this.getDuckCount();
  }

  getDuckCount() {
    this.curService.getDuckCount();
  }

}
