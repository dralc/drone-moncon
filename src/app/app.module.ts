import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCardModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SimulateComponent } from './simulate/simulate.component';
import { MonitorComponent } from './monitor/monitor.component';
import { LogsComponent } from './logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    SimulateComponent,
    MonitorComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
