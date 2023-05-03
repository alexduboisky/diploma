import { Component } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Admin} from "../../models/users";
import md5 from 'md5'
import {Router} from "@angular/router";

@Component({
  selector: 'app-teacher-auth-modal',
  templateUrl: './teacher-auth-modal.component.html',
  styleUrls: ['./teacher-auth-modal.component.scss']
})
export class TeacherAuthModalComponent {

  f: FormGroup
  isErrorMessageShowing: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private auth: AuthService,
    private router: Router
  ) {
    this.f = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submitData() {
    const hashedPassword = md5(this.f.controls['password'].value)
    this.auth.loginAdmin(this.f.controls['login'].value).subscribe((admin: Admin[]) => {
      if (!admin.length || admin[0].passwordHash !== hashedPassword) return this.showErrorMessage()
      this.auth.setAdmin(admin[0])
      this.activeModal.close();
      this.router.navigate(['admin-panel'])
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
