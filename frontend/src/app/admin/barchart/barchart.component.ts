import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss'],
})
export class BarchartComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.createChartColumn();
  }

 

  private createChartColumn(): void {
    const data1: any[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55,60];
    const data2: any[] = [10, 20, 40, 50, 60, 15, 25, 35, 45, 55, 5, 55];
    const data3: any[] = [12, 29, 32, 45, 59, 54, 24,15,45, 55,32, 14];

    const chart = Highcharts.chart(
      'chart-column' as any,
      {
        chart: {
          type: 'column',
          backgroundColor: '#f4f4f7',
        },
        title: {
          text: undefined, // Change the title
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false, // Enable the legend to distinguish between series
        },
        yAxis: {
          min: 0,
          title: undefined,
          tickInterval: 10, // Set the tick interval to 10
          max: 60, // Set the maximum value on the y-axis
        },
        xAxis: {
          type: 'category',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], // Replace with your desired month labels
        },
        tooltip: {
          headerFormat: `<div>Date: {point.key}</div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        series: [
          {
            name: 'Amount 1',
            data: data1,
            color: 'red',
          },
          {
            name: 'Amount 2',
            data: data2,
          },
          {
            name: 'Amount 3',
            data: data3,
            color: '#f188ea',
          },
        ],
      } as any
    );
  }

}