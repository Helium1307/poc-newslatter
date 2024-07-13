import { TaskScheduleAdapter } from "./interfaces/task-schedule-adapter";
import nodecron from "node-cron";

export default class NodecronTaskScheduleAdapter
  implements TaskScheduleAdapter
{
  private taskScheduler: typeof nodecron = nodecron;

  setSchedule(cronExpression: string, cb: any, options: Object) {
    this.taskScheduler.schedule(cronExpression, cb, options);
  }
  start(): void {}
  stop(): void {}

  validateCronExpression(cronExpression: string): boolean {
    return this.taskScheduler.validate(cronExpression);
  }
}
