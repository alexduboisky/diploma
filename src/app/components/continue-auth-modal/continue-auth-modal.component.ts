import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/users";

@Component({
  selector: 'app-continue-auth-modal',
  templateUrl: './continue-auth-modal.component.html',
  styleUrls: ['./continue-auth-modal.component.scss']
})
export class ContinueAuthModalComponent {

  isErrorMessageShowing: boolean = false
  f: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AuthService
  ) {
    this.f = new FormGroup({
      passCode: new FormControl('', Validators.required)
    })
  }

  submitData() {
    this.auth.loginUser(this.f.controls['passCode'].value).subscribe((user: User[]) => {
      if (!user.length) return this.showErrorMessage()
      this.auth.setUser(user[0])
      this.activeModal.close();
    })
  }

  showErrorMessage(): void {
    this.isErrorMessageShowing = true
    setTimeout(() => { this.isErrorMessageShowing = false }, 5000)
  }

  cancel() {
    this.activeModal.close(null);
  }
}
