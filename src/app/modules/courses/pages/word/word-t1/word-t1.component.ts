import { Component } from '@angular/core';
import {DatabaseService} from "../../../../../services/database.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth.service";
import {CourseState} from "../../../../../services/course.service";

@Component({
  selector: 'app-word-t1',
  templateUrl: './word-t1.component.html',
  styleUrls: ['./word-t1.component.scss']
})
export class WordT1Component {
  isTestPassed: boolean = false
  constructor(private db: DatabaseService, private router: Router, private auth: AuthService) {
  }

  async finishCourse() {
    this.router.navigate(['courses'])
  }

  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c4', 'p1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c4/p1'])
  }

  getIsTestPassed($event: boolean) {
    this.isTestPassed = $event
  }
}
