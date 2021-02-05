import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    WavesModule.forRoot(),
    NgApexchartsModule
  ]
})
export class DashboardModule { }
