import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-continue-auth-modal',
  templateUrl: './continue-auth-modal.component.html',
  styleUrls: ['./continue-auth-modal.component.scss']
})
export class ContinueAuthModalComponent {

  password: string = ''

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  submitData() {
    this.activeModal.close({ password: this.password });
  }

  cancel() {
    this.activeModal.close(null);
  }
}
