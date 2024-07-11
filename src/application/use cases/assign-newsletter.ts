import { inject, injectable } from "tsyringe";
import { UseCase } from "../../infra/http/interfaces/UseCase";
import { ISubscribersRepository } from "../repository/SubscribersRepository";

interface Input {
  email: string;
}

@injectable()
export default class AssignNewsletter implements UseCase<Input, string> {
  constructor(
    @inject("SubscribersRepository")
    private subscribersRepository: ISubscribersRepository
  ) {}

  async execute({ email }: Input): Promise<string> {
    const emailExists = await this.subscribersRepository.findByEmail(email);

    if (emailExists) throw new Error("Email is already in use");
    const response = await this.subscribersRepository.save(email);

    return response;
  }
}
