import { ISubscribersRepository } from "@application/repository/SubscribersRepository";
import { container } from "tsyringe";
import SubscribersRepository from "../repository/SubscribersRepository";

container.registerSingleton<ISubscribersRepository>(
  "SubscribersRepository",
  SubscribersRepository
);
