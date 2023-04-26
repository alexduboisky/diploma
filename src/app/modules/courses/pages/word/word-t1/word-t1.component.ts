import { Component } from '@angular/core';
import {DatabaseService} from "../../../../../services/database.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-word-t1',
  templateUrl: './word-t1.component.html',
  styleUrls: ['./word-t1.component.scss']
})
export class WordT1Component {
  isTestPassed: boolean = false
  constructor(private db: DatabaseService, private router: Router, private auth: AuthService) {
  }

  finishCourse() {
    const courseId = this.router.url.split('/').reverse()[1]
    this.db.finishCourseToUser(this.auth.User.getValue().id, courseId)
    this.router.navigate(['courses'])
  }

  prevLesson() {
    this.db.updateCourseToUser(this.auth.User.getValue().id, 'c4', 'p1')
    this.router.navigate(['courses/c4/p1'])
  }

  getIsTestPassed($event: boolean) {
    this.isTestPassed = $event
  }
}
