export class Faculty {
  name: string;
  id: number;
  idUniv: number;
}

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

}
