import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';
import { Student } from '../models/student';

@Injectable()
export class StudentService extends Service<Student> {

  constructor(http: HttpClient) {
    super(http, "students");
  }

}
