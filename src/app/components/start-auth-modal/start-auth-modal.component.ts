import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-start-auth-modal',
  templateUrl: './start-auth-modal.component.html',
  styleUrls: ['./start-auth-modal.component.scss']
})

export class StartAuthModalComponent {

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
