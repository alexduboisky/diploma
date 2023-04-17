import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StartAuthModalComponent} from "../start-auth-modal/start-auth-modal.component";
import {ContinueAuthModalComponent} from "../continue-auth-modal/continue-auth-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  constructor(public modalService: NgbModal) {}

  startStudy() {
    const modalRef = this.modalService.open(StartAuthModalComponent)
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }

  continueStudy() {
    const modalRef = this.modalService.open(ContinueAuthModalComponent)
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
      }
    });
  }
}
