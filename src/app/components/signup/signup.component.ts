import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  closeResult: String;
  student: Student;
  modalRef: NgbModalRef;

  @Output() signupHandler: EventEmitter<boolean>;
  @ViewChild('content') content: ElementRef;

  constructor(private studentService: StudentService,
    private modalService: NgbModal) {
    this.signupHandler = new EventEmitter<boolean>();
    this.student = new Student();
  }

  createStudent(form: NgForm): void {
    this.student = <Student>form.value;
    this.studentService.create(this.student).subscribe(result => {
      if (StudentService.isErrorObservable(result)) {
        console.log("error: " + result.error);
        this.signupHandler.emit(false);
      } else {
        console.log("success: ");
        console.log(result);
        this.signupHandler.emit(true);
      }
      this.modalRef.close();
    });
  }

  open() {
    this.modalRef = this.modalService.open(this.content);
    this.modalRef.result.then((result) => {
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
