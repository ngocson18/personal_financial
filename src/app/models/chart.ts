export interface ChartModel {
  type: string;
  data: DataModel;
  options: any;
}

export interface DataModel {
  labels: string[];
  datasets: DoughnutDatasetModel[] | LineDatasetModel[] | BarDatasetModel[];
}

export interface DoughnutDatasetModel {
  label: string | number;
  data: string[] | number[];
  backgroundColor: string[];
  hoverOffset?: number;  // 4
}

export interface LineDatasetModel {
  label: number | string;
  data: string[] | number[];
  fill: boolean;
  borderColor: string,
  tension: number // 0.4
}

export interface BarDatasetModel {
  label: string | number;
  data: string[] | number[];
  backgroundColor: string[];
  borderColor: string[];
  borderWidth: number;
}
