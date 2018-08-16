import {Article} from './article';
import {Branch} from './branch';

export class Subject {
  public id: number;
  public name: string;
  public branches: Branch[] = [];
  public articles: Article[] = [];
}
