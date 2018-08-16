import {University} from './university';

export class Faculty {
  //
  // name: string;
  // branches: string[] = [];
  // id: number;
  // university: University = null;
  //
  // constructor(
  // ) {}
  //
  // addBranch(branch: string): void {
  //   this.branches.push(branch);
  // }
  //
  // setName(newName: string): void {
  //   this.name = name;
  // }
  //
  // getName(): string {
  //   return this.name;
  // }

  name: string;
  id: number;
  university: University;
  branches: Branch[] = [];
}
