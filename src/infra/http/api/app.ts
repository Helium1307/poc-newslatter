import "reflect-metadata";
import "@infra/http/container";
import express from "express";
import { router } from "../routes";
import "dotenv/config";
import { CronJob } from "cron";
import NewsGetterGateway from "../gateways/NewsGetter";
import { AxiosHttpClientAdapter } from "@infra/adapters/axios-http-client-adapter";

const app = express();
app.use(express.json());

app.use(router);

const job = CronJob.from({
  cronTime: "*/60 * * * * *",
  onTick: async () => {
    const news = new NewsGetterGateway(new AxiosHttpClientAdapter());

    console.log(await news.getNews("br", "technology"));
  },
  start: false,
  timeZone: "America/Los_Angeles",
});

job.start();

export { app };
