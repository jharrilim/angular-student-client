import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() students: Student[];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.all().subscribe(result => {
      if(StudentService.isErrorObservable(result)){
        // TODO: Handle err
        return;
      } else {
        this.students = result;
      }
    });
  }
}
