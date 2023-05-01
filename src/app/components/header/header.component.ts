import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {StartAuthModalComponent} from "../start-auth-modal/start-auth-modal.component";
import {ContinueAuthModalComponent} from "../continue-auth-modal/continue-auth-modal.component";
import firebase from "firebase/compat";
import auth = firebase.auth;
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() openChatEvent = new EventEmitter<void>()

  constructor(public modalService: NgbModal, public auth: AuthService, private router: Router) {}

  startStudy() {
    this.modalService.open(StartAuthModalComponent)
  }

  continueStudy() {
    this.modalService.open(ContinueAuthModalComponent)
  }

  logout() {
    this.auth.logout()
    this.router.navigate([''])
  }

  openChat() {
    this.openChatEvent.emit()
  }
}
