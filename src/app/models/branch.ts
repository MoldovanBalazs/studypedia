import {Subject} from './subject';
import {Faculty} from './faculty';

export class Branch {
  id: number;
  name: string;
  subjectList: Subject[] = [];
  faculty: Faculty;
}
