import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss'],
})
export class LinechartComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.createChartLine();
  }
  
  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [50, 30, 50, 40, 50, 60, 50, 40, 30, 60, 30, 10];
  
    const chart = Highcharts.chart('chart-line', {
      chart: {
        type: 'spline',
        backgroundColor: '#f4f4f7',
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
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
        headerFormat: `<div>Date: {point.key:%B}</div>`, // Display the month name in the tooltip
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Amount',
          data,
          color:'red',
          marker: {
            enabled: false, // Disable markers for data points
          },
          
        },
        
        
      ],
    } as any);
  }
  
}
