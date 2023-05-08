import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-excel-l3',
  templateUrl: './excel-l3.component.html',
  styleUrls: ['./excel-l3.component.scss']
})
export class ExcelL3Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async prevLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l2')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l2'])
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'l4')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l4'])
  }

}
