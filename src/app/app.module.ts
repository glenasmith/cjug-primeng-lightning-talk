import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DataTableModule,SharedModule,GrowlModule,ChartModule,GMapModule,PaginatorModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    PaginatorModule,
    SharedModule,
    GrowlModule,
    GMapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
