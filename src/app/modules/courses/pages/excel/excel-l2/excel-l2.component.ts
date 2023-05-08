import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-excel-l2',
  templateUrl: './excel-l2.component.html',
  styleUrls: ['./excel-l2.component.scss']
})
export class ExcelL2Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l1'])
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'l3')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l3'])
  }
}
