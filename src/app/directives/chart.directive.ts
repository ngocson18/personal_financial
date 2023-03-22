import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnChanges {

  @Input()
  data: any;

  @Input()
  options!: any;

  @Input()
  type: 'bar' | 'bubble' | 'doughnut' | 'line' | 'polarArea' | 'radar' | 'scatter' = 'bar';

  chartObject!: Chart;
  constructor(
    protected elementRef: ElementRef
  ) {
    Chart.register(...registerables);
    Chart.register(ChartDataLabels);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.createChart();
  }

  protected createChart(): void {
    if (this.chartObject) {
      this.chartObject.destroy();
    }
    this.chartObject = new Chart(this.elementRef.nativeElement, {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }
}
