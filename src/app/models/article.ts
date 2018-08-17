import {User} from './user';
import {Subject} from './subject';

export class Article {
  public id: number;
  public title: string;
  public user: User;
  public date: Date;
  public articleType: string;
  public link: string;
  public description: string;
  public subject: string;
  public file: string|any;
  public status: number;
  public userId: number;
}
