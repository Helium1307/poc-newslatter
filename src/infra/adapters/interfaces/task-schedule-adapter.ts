export interface TaskScheduleAdapter {
  setSchedule(cronExpression: string, cb: any, options: Object): any;
  start(): void;
  stop(): void;
}
