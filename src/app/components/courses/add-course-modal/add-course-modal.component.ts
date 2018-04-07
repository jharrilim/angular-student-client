import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-add-course-modal',
  templateUrl: './add-course-modal.component.html',
  styleUrls: ['./add-course-modal.component.css']
})
export class AddCourseModalComponent {
  closeResult: String;
  course: Course;

  @Output() courseCreate: EventEmitter<Course>;
  @ViewChild('content') content: ElementRef;

  constructor(private modalService: NgbModal) {
    this.courseCreate = new EventEmitter();
    this.course = new Course();
  }

  onCourseCreate(f: NgForm) {
    console.log(f);
    this.course = <Course>f.value;
    console.log(this.course);
    this.courseCreate.emit(this.course);
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
