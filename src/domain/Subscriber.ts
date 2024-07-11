export default class Subscriber {
  private _id: string;
  private _email: string;

  constructor(id: string, email: string) {
    this._id = id;
    this._email = email;
  }

  get id() {
    return this._id;
  }
  get email() {
    return this._email;
  }
}
