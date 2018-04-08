import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/Student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  closeResult: String;
  student: Student;

  @Output() signupHandler: EventEmitter<Student>;
  @ViewChild('content') content: ElementRef;

  constructor(private studentService: StudentService,
    private modalService: NgbModal) {
    this.signupHandler = new EventEmitter<Student>();
    this.student = new Student();
  }

  createStudent(student: Student): void {
    this.studentService.create(student).subscribe(result => {
      if (StudentService.isErrorObservable(result)) {
        console.log("error: " + result.error);
      }
      console.log("success: ");
      console.log(result);
    });
  }

  open() {
    this.modalService.open(this.content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
