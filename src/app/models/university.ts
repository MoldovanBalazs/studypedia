import {Faculty} from './faculty';

export class University {

  name: string;
  faculties: Faculty[] = [];
  id: number;

  constructor(
  ) {}

  addFaculty(faculty: Faculty): void {
    this.faculties.push(faculty);
  }

  setName(newName: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setFaculties(faculties: Faculty[]): void{
	  this.faculties = faculties;
  }

  getFaculties(): Faculty[] {
	  return this.faculties;
  }

}
