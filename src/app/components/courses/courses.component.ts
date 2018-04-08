import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  @Input() courses: Course[];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.loadCourses();
  }

  createCourse(course: Course): void {
    console.log(course);
    this.courseService.create(course).subscribe(result => {
      if (CourseService.isErrorObservable(result)) {
        console.log("error: " + result.error);
      }
      console.log("success: ");
      console.log(result);
      this.loadCourses();
    });
  }

  loadCourses(): void {
    this.courseService.all().subscribe(result => {
      if (CourseService.isErrorObservable(result)) {
        // TODO: Handle err
        return;
      } else {
        this.courses = result;
      }
    });
  }

}
