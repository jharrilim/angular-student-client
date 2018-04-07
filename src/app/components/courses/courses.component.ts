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
    this.courseService.create(course).subscribe(course => {
      console.log(course);
    }, e => console.log(e ? e : "")
    );
  }

  loadCourses() {
    this.courseService.all().subscribe(
      courses => this.courses = courses,
      err => console.log(err.message)
    );
  }

}
