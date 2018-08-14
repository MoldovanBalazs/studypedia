import {User} from './user';

export class Article {
  public id: number;
  public title: string;
  public date: Date;
  public user: User;
  public userId: number;
  public description: string;
  public articleType: string;
  public subject: string;

}
