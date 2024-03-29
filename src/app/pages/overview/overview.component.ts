import { Component, OnInit } from '@angular/core';
import { DataModel } from 'src/app/models/chart';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public isOpen = false;
  public dataOverview: DataModel = {
    labels: [
    ],
    datasets: [
      {
        label: "",
        data: ['300', '300'],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
        ],
      },
    ]
  }

  public  dataOut = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: 'First',
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

  public optionsOut = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  public dataSurplus = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  public optionsSurplus = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  constructor(
    private shareService: ShareService,
  ) {
    this.shareService.currentStatus.subscribe(el => this.isOpen = el);
  }
  ngOnInit(): void {
    this.shareService.openMenu(false);
  }

  getIncome(): void {
    
  }
}

