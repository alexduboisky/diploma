import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-excel-l4',
  templateUrl: './excel-l4.component.html',
  styleUrls: ['./excel-l4.component.scss']
})
export class ExcelL4Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l4')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l4'])
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'p1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/p1'])
  }

}
