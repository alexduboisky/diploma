import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {v4 as uuidv4} from 'uuid';
import {User} from "../../models/users";

@Component({
  selector: 'app-start-auth-modal',
  templateUrl: './start-auth-modal.component.html',
  styleUrls: ['./start-auth-modal.component.scss']
})

export class StartAuthModalComponent {

  f: FormGroup
  isErrorMessageShowing: boolean = false

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AuthService
  ) {
    this.f = new FormGroup({
      name: new FormControl('', Validators.required),
      passCode: new FormControl('', Validators.required),
    })
  }

  submitData() {
    const data = {
      id: uuidv4(),
      name: this.f.controls['name'].value,
      passCode: this.f.controls['passCode'].value
    }
    this.auth.registerUser(data).subscribe((user: User[]) => {
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
