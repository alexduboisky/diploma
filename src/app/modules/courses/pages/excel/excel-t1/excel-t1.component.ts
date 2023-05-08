import { Component } from '@angular/core';
import {DatabaseService} from "../../../../../services/database.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-excel-t1',
  templateUrl: './excel-t1.component.html',
  styleUrls: ['./excel-t1.component.scss']
})
export class ExcelT1Component {
  isTestPassed: boolean = false
  constructor(private db: DatabaseService, private router: Router, private auth: AuthService) {
  }

  async finishCourse() {
    this.router.navigate(['courses'])
  }

  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'p1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/p1'])
  }

  getIsTestPassed($event: boolean) {
    this.isTestPassed = $event
  }

}
