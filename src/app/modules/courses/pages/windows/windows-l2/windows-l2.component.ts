import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-windows-l2',
  templateUrl: './windows-l2.component.html',
  styleUrls: ['./windows-l2.component.scss']
})
export class WindowsL2Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  prevLesson() {
    this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l1')
    this.router.navigate(['courses/c3/l1'])
  }

  openTest() {
    this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 't1')
    this.router.navigate(['courses/c3/t1'])
  }
}
