import { container } from "tsyringe";
import { Response, Request } from "express";
import AssignNewsletter from "application/use cases/assign-newsletter";

interface Input {
  email: string;
}

export default class AssingNewsletterController {
  async handle(
    req: Request<unknown, unknown, Input>,
    res: Response
  ): Promise<Response> {
    const assignNewsletterUseCase = container.resolve(AssignNewsletter);
    const { email } = req.body;

    await assignNewsletterUseCase.execute({ email });
    return res.status(201);
  }
}
