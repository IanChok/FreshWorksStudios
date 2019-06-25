import { Component, OnInit } from '@angular/core';
import { CurrentService } from '../services/current.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {

  isLoggedIn = false;

  duckCount: any = [];

  constructor(private curService: CurrentService) { }

  ngOnInit() {
    this.getDuckCount();
  }

  getDuckCount() {
    this.curService.getDuckCount().then((data: any[]) => {
      data.forEach(doc => {
        this.duckCount.push(doc.data());
      });
      console.log('duckCount: ', this.duckCount);
      if (this.duckCount.length !== 0) {
        this.isLoggedIn = true;
      }
    });
  }
}
