import {User} from './user';

export class Article {
  public id: number;
  public title: string;
  public user: User;
  public date: Date;
  public articleType: number;
  public link: string;
  public description: string;
}
