import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Drone } from '../shared/Drone.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  dronesChanged = new Subject<Drone[]>();

  constructor(private httpClient: HttpClient) { }

  getData (droneId: string) {

    // TODO create dyn dev/prod search endpoint
    this.httpClient.get<Drone[]>('http://localhost:5000/drones.json',
      { params: new HttpParams().set('id', droneId) })
      .pipe(
        map((drones) => {
          // temp filtering client side
          return drones.filter((drone) => drone.id.indexOf(droneId) !== -1);
        })
      ).subscribe((dat) => {
        this.dronesChanged.next(dat);
      });
  }
}
