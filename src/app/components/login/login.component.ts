import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  closeResult: String;
  student: Student;
  modal: NgbModalRef;

  @Output() loginHandler: EventEmitter<Student>;
  @ViewChild('content') content: ElementRef;
  constructor(private modalService: NgbModal) {
    this.loginHandler = new EventEmitter();
    this.student = new Student();
  }

  open() {
    this.modal = this.modalService.open(this.content);
    this.modal.result.then((result) => {
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
