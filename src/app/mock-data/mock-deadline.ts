import {Deadline, Duration} from "../models/deadline";
import {User} from "../models/user";

export const DEADLINES: Deadline[] = [

  //{name : 'OOP lab evaluation', deadline : new Date(Date.UTC("2018-08-15T14:45:00-00:00")), timeRemaining : new Duration()},
  {id : null, name : 'OOP lab evaluation', date : new Date("2018-07-31T13:00:00-00:00"), timeRemaining : new Duration(), user : new User()},
  {id : null, name : 'OS homework', date : new Date("2018-08-02T09:15:00-00:00"), timeRemaining : new Duration(), user : new User()},
  {id : null, name : 'DSD exam', date : new Date("2018-07-29T13:30:00-00:00"), timeRemaining : new Duration(), user : new User()},
  {id : null, name : 'CA exam', date : new Date("2018-07-31T08:10:00-00:00"), timeRemaining : new Duration(), user : new User()},
  {id : null, name : 'FPT project', date : new Date("2018-09-03T11:30:00-00:00"), timeRemaining : new Duration(), user : new User()}

];

