import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  inputData = '';
  data = new Subject();

  @ViewChild('formSearchById') formSearchById: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit () {
    this.data.next( this.getData() );
  }

  getData () {
    return [{
      id: 'civ-drone-abc',
      status: 'In-flight',
      startCoord: 'x, y, z',
      lastCoord: 'a, b, c',
      flightTime: '1hr 2min',
      startTime: '1/Jan/2019 9:00am',
    }, {
      id: 'mil-drone',
      status: 'In-flight',
      startCoord: 'x, y, z',
      lastCoord: 'a, b, c',
      flightTime: '1hr 2min',
      startTime: '1/Jan/2019 9:00am',
    }, {
      id: 'com-drone',
      status: 'In-flight',
      startCoord: 'x, y, z',
      lastCoord: 'a, b, c',
      flightTime: '1hr 2min',
      startTime: '1/Jan/2019 9:00am',
    }];
  }

}
