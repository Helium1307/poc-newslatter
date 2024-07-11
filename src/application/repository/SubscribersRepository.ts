import Subscriber from "domain/Subscriber";

export interface ISubscribersRepository {
  findByEmail(email: string): Promise<Subscriber>;
  save(email: string): Promise<string>;
}
