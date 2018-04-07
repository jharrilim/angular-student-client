import { Student } from './student';

export class Course {
  public courseCode: String;
  public name: String;
  public section: String;
  public semester: String;
  public students?: Student[];
  constructor() { }

}
