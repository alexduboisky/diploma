import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-teacher-auth-modal',
  templateUrl: './teacher-auth-modal.component.html',
  styleUrls: ['./teacher-auth-modal.component.scss']
})
export class TeacherAuthModalComponent {

  username: string = ''
  password: string = ''

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  submitData() {
    this.activeModal.close({ username: this.username, password: this.password });
  }

  cancel() {
    this.activeModal.close(null);
  }
}
