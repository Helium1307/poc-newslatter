import { Router } from "express";
import { subscriberRoute } from "./subscribers.routes";

const router = Router();

router.use("/subscribers", subscriberRoute);

export { router };
