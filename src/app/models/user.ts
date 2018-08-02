export class User {

  constructor(
    public id: number,
    public username: string,
    public password: string,
    public university?: string,
    public faculty?: string,
    public branch?: string
  ) {  }
}
