import {User} from './user';
import {Subject} from './subject';

export class Article {
  public id: number;
  public title: string;
  public user: User;
  public date: Date;
  public articleType: number;
  public link: string;
  public description: string;
  public subject: Subject;
  public status: number;
}
