export interface ISelectiveDateParams {
  year: string;
  month: string;
}

export interface ISelectiveStatisticsParams extends ISelectiveDateParams {
  studentName: string;
}
