import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TeacherAuthModalComponent} from "../teacher-auth-modal/teacher-auth-modal.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public modalService: NgbModal, public auth: AuthService,) {}

  openAuthModal() {
    this.modalService.open(TeacherAuthModalComponent)
  }
}
