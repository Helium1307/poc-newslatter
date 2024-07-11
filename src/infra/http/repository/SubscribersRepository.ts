import Subscriber from "domain/Subscriber";
import { ISubscribersRepository } from "../../../application/repository/SubscribersRepository";
import { prisma } from "../database/prisma";

export default class SubscribersRepository implements ISubscribersRepository {
  async save(email: string): Promise<string> {
    const subscriber = await prisma.subscribers.create({
      data: {
        email,
      },
    });

    return subscriber.id;
  }

  async findByEmail(email: string): Promise<Subscriber | null> {
    const data = await prisma.subscribers.findFirst({
      where: {
        email,
      },
    });

    if (data) {
      const subscriber = new Subscriber(data.id, data.email);
      return subscriber;
    }
    return null;
  }
}
