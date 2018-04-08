import { Course } from './course';

export class Student {
  public studentNumber: String;
  public password: String;
  public firstName: String;
  public lastName: String;
  public address: String;
  public city: String;
  public phoneNumber: String;
  public email: String;
  public courses?: Course[];
  constructor() { }
}
