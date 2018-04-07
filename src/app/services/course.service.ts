import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service';
import { Course } from '../models/course';

@Injectable()
export class CourseService extends Service<Course> {

  constructor(http: HttpClient) {
    super(http, "courses");
  }


}
