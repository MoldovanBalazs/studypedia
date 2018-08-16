import {Subject} from './subject';
import {Faculty} from './faculty';

export class Branch {
  public id: number;
  public name: string;
  public subjectList: Subject[] = [];
  public faculty: Faculty;
}
