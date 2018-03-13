import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { HighchartzRoutingModule } from "./highchartz.routing.module";
import { HighchartzComponent } from './highchartz.component';

@NgModule({
  imports: [
    CommonModule,
    HighchartzRoutingModule
  ],
  declarations: [LineComponent, BarComponent, HighchartzComponent]
})
export class HighchartzModule { }
