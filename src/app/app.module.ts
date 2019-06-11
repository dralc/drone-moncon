import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { SimulateComponent } from './simulate/simulate.component';
import { MonitorComponent } from './monitor/monitor.component';
import { LogsComponent } from './logs/logs.component';
import { FormsModule } from '@angular/forms';
import { FilterCollectionPipe } from './shared/filterCollection.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimulateComponent,
    MonitorComponent,
    LogsComponent,
    FilterCollectionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
