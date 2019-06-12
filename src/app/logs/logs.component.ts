import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LogsService } from './logs.service';
import { Drone } from '../shared/Drone.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {

  drones: Drone[];
  dronesSubs: Subscription;
  droneIdQuery = '';

  @ViewChild('formSearchById') formSearchById: NgForm;

  constructor(private logsService: LogsService) { }

  ngOnInit() {
    this.dronesSubs = this.logsService.dronesChanged
      .subscribe( (drones) => {
        this.drones = drones;
      });
  }

  onSubmit () {
    this.droneIdQuery = this.formSearchById.value.droneId;
    this.logsService.getData(this.droneIdQuery);
  }

  ngOnDestroy(): void {
    this.dronesSubs.unsubscribe();
  }

}
