import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from "./bar/bar.component";
import { HighchartzComponent } from "./highchartz.component";
import { LineComponent } from "./line/line.component";

const routes: Routes = [

  {
    path: '',
    component: HighchartzComponent,
    data: {
      title: 'Highchartz'
    }
  ,
  children: [
    {
      path: 'bar',
      component: BarComponent,
      data: {
        title: 'Bar'
      }
     },

     {
      path: 'line',
      component: LineComponent,
      data: {
        title: 'line'
      }
     },     
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartzRoutingModule { }
