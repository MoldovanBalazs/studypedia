export class Article {
  id: number;
  title: string;
  date: Date;
  author: string;
  proposerName: string;
  description: string;
  articleStatus: any;
  articleType: any;
}

export class Subject {
  id: number;
  name: string;
  articles: Article[];
}

export class Branch {
  id: number;
  name: string;
  subjects: Subject[];
}

export class Faculty {
  name: string;
  id: number;
  idUniv: number;
  // branches: Branch[];
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
  
  setFaculties(faculties: Faculty[]): void{
	  this.faculties = faculties;
  }
  
  getFaculties(): Faculty[] {
	  return this.faculties;
  }

}
