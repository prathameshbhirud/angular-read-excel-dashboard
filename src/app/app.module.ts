import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExcelUploadReadComponent } from './excel-upload-read/excel-upload-read.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { KendoPieChartComponent } from './kendo-pie-chart/kendo-pie-chart.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    ExcelUploadReadComponent,
    KendoGridComponent,
    KendoPieChartComponent
  ],
  imports: [
    BrowserModule,
    GridModule,
    ChartsModule,
    BrowserAnimationsModule,
    DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
