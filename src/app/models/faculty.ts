import { University} from './university';
import {Branch} from './branch';

export class Faculty {
  name: string;
  id: number;
  university: University;
  branches: Branch[] = [];
}
