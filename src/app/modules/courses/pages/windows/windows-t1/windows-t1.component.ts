import { Component } from '@angular/core';
import {DatabaseService} from "../../../../../services/database.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-windows-t1',
  templateUrl: './windows-t1.component.html',
  styleUrls: ['./windows-t1.component.scss']
})
export class WindowsT1Component {
  isTestPassed: boolean = false
  constructor(private db: DatabaseService, private router: Router, private auth: AuthService) {
  }

  async finishCourse() {
    const courseId = this.router.url.split('/').reverse()[1]
    await this.db.finishCourseToUser(this.auth.User.getValue().id, courseId)
    await this.auth.updateUserData()
    this.router.navigate(['courses'])
  }

  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l2')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c3/l2'])
  }

  getIsTestPassed($event: boolean) {
    this.isTestPassed = $event
  }
}
