import { Injectable } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
@Injectable({
  providedIn: 'root'
})
export class CreateChartService {

  constructor() { }

  createChart(idCanvas: string, type: ChartType, data: any, options?: any): any {
    const chart = new Chart(idCanvas, {
      type: type,
      data: data,
      options: options
    });
    return chart;
  }
}