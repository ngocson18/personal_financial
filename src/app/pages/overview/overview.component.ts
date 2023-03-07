import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public chartOverview: any;
  public chartLast7Days: any;
  public chartSurplus: any;
  public isOpen = false;
  constructor(
    private shareService: ShareService
  ) {

  }
  ngOnInit(): void {
    this.createOverViewChart();
    this.createLast7DaysChart();
    this.createSurplusChart();
  }

  createOverViewChart(): void {
  
    this.chartOverview = new Chart('overview-chart', {
      type: 'doughnut',
      data: {// values on X-Axis
        // labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
				// 				 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572'],
              backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  createLast7DaysChart(): void {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    this.chartLast7Days = new Chart("out-chart", {
      type: 'bar',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

  createSurplusChart() : void {
    const data = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]};
    this.chartSurplus = new Chart("surplus-chart", {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }

  openMenu(): void {
    this.isOpen = true;
    this.shareService.openMenu(this.isOpen);
  }
}
