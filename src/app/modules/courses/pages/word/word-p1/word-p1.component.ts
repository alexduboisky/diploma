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
  prevLesson() {
    this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l1')
    this.router.navigate(['courses/c4/l1'])
  }

  openTest() {
    this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 't1')
    this.router.navigate(['courses/c4/t1'])
  }
}
