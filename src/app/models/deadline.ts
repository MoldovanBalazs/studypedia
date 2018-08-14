import {User} from "./user";

export class Deadline {
  public id: number;
  public name: string;
  public date: Date;
  public user: User;
  public timeRemaining: Duration;
}

export class Duration{
  public days:Number;
  public hours:Number;
  public minutes: Number;
  public seconds:Number;
}
