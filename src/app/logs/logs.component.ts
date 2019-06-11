import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {

  data = new Subject();
  droneIdQuery = '';

  @ViewChild('formSearchById') formSearchById: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit () {
    this.droneIdQuery = this.formSearchById.value.droneId;
    this.data.next( this.getData(this.droneIdQuery) );
  }

  getData (droneId: String) {

    // TODO create logs service to get data
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

  ngOnDestroy(): void {
    this.data.unsubscribe();
  }

}
