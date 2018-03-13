import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./modules/layout/layout.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LayoutComponent,
    data: {
      title: 'Highcharts'
    },
    children: [
      {
        path: 'highcharts',
        loadChildren: './modules/highchartz/highchartz.module#HighchartzModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
