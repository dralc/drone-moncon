import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  data = [{
    id: 'civ-drone-abc',
    status: 'In-flight',
    startCoord: 'x, y, z',
    lastCoord: 'a, b, c',
    flightTime: '1hr 2min',
    startTime: '1/Jan/2019 9:00am',
  }, {
    id: 'mil-drone-abc',
    status: 'In-flight',
    startCoord: 'x, y, z',
    lastCoord: 'a, b, c',
    flightTime: '1hr 2min',
    startTime: '1/Jan/2019 9:00am',
  }];

  constructor() { }

  ngOnInit() {
  }

}
