import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../models/users";
import {DatabaseService} from "../../services/database.service";

@Component({
  selector: 'app-change-passcode-modal',
  templateUrl: './change-passcode-modal.component.html',
  styleUrls: ['./change-passcode-modal.component.scss']
})
export class ChangePasscodeModalComponent {

  @Input() user: User

  f: FormGroup

  constructor(
    public activeModal: NgbActiveModal,
    private db: DatabaseService
  ) {
    this.f = new FormGroup({
      passCode: new FormControl('', Validators.required)
    })
  }

  async submitData() {
    const data = {
      ...this.user,
      passCode: this.f.controls['passCode'].value
    }
    await this.db.updateUserInfo(data)
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.close(null);
  }
}
