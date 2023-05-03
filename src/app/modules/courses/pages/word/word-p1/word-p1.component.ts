import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-word-p1',
  templateUrl: './word-p1.component.html',
  styleUrls: ['./word-p1.component.scss']
})
export class WordP1Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c4/l1'])
  }

  async openTest() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 't1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c4/t1'])
  }
}
