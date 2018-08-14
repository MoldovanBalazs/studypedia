import { User} from './user';

export class Deadline {
  public id: number;
  public name: string;
  public date: Date;
  public user: User;
  public timeRemaining: Duration;
}

export class Duration {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
}
