import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { LayoutService } from '../../../share/layout.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public userList: any = [];
  public countryList = [];
  public productTopList = [];
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<any>;
  public chartOptions1: Partial<any>;
  public chartOptions2: Partial<any>;
  constructor(private layoutService: LayoutService, private httpClient: HttpClient) {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((res) => {
      this.userList = res;
    });
    this.countryList = layoutService.country;
    this.productTopList = layoutService.product;
    this.chartOptions = {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct'
        ]
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          // tslint:disable-next-line:typedef
          formatter(val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'Bubble1',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble2',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble3',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Bubble4',
          data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        }
      ],
      chart: {
        height: 350,
        type: 'bubble'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Simple Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'category'
      },
      yaxis: {
        max: 70
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 23, 2]
        }
      ],
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityForm: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan'
        ]
      },
      yaxis: {
        max: 70
      }
    };
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  private generateData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
