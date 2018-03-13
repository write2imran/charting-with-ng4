import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { LayoutComponent } from "./modules/layout/layout.component";
import { HighchartzModule } from "./modules/highchartz/highchartz.module";

@NgModule({
  declarations: [  
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HighchartzModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
