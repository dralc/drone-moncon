import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulateComponent } from './simulate/simulate.component';
import { LogsComponent } from './logs/logs.component';
import { MonitorComponent } from './monitor/monitor.component';

const routes: Routes = [
  { path: 'simulate', component: SimulateComponent },
  { path: 'monitor', component: MonitorComponent },
  { path: 'logs', component: LogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
