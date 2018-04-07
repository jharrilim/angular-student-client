import { Component, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  @Input() courses: Course[];

  constructor(private courseService: CourseService) { }

  createCourse(course: Course) {
    console.log(course);
    // this.courseService.create(course).subscribe(course => {
    //   console.log(course);
    // }, e => console.log(e ? e : "")
    // );
    this.courseService.test(course).subscribe(result => {
      if (CourseService.isErrorObservable(result))
        return console.log("error: " + result.error);
      return console.log("success: " + result);
    });
  }

  loadCourses(): void {
    this.courseService.all().subscribe(result => {
      if (CourseService.isErrorObservable(result)) {
        // say bad things, i know you like bad things
      } else { // result is Course[]
        this.courses = result;
      }
    });
  }

}
