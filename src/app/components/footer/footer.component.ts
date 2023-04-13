import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TeacherAuthModalComponent} from "../teacher-auth-modal/teacher-auth-modal.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public modalService: NgbModal) {}

  openAuthModal() {
    const modalRef = this.modalService.open(TeacherAuthModalComponent)
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
