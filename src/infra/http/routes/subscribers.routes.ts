import AssingNewsletterController from "@infra/http/controllers/AssignNewsletterController";
import { Router } from "express";

const subscriberRoute = Router();

const assingNewsletterController = new AssingNewsletterController();

subscriberRoute.post("/", assingNewsletterController.handle);

export { subscriberRoute };
