export class University {

  name: string;
  faculties: string[] = [];
  public id: number;

  constructor(
  ) {}

  addFaculty(faculty: string): void {
    this.faculties.push(faculty);
  }

  setName(newName: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
  getId(): number {
    return this.id;
  }

}
