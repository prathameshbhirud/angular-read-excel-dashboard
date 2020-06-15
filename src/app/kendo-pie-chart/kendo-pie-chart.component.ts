import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-pie-chart',
  templateUrl: './kendo-pie-chart.component.html',
  styleUrls: ['./kendo-pie-chart.component.css']
})
export class KendoPieChartComponent implements OnInit {
  pieData: any[];
  hidePieChart = true;

  constructor() { }

  ngOnInit() {
  }

  showPieChart() {
      this.hidePieChart = false;
      this.pieData = [
        {
          category: "Football",
          value: 35
        }, 
        {
          category: "Basketball",
          value: 25
        },
        {
          category: "Volleyball",
          value: 20
        },
        {
          category: "Rugby",
          value: 10
        },
        {
          category: "Tennis",
          value: 10
        }
      ];
    }
}
