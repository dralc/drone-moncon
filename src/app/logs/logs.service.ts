import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Drone } from '../shared/Drone.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  dronesChanged = new Subject<Drone[]>();

  constructor(private httpClient: HttpClient) { }

  getData (droneId: string) {
    const opts = {
      params: new HttpParams().set('id', droneId)
    };

    this.httpClient.get<Drone[]>( environment.droneSearchEndpoint, opts )
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
