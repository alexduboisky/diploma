import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-excel-l1',
  templateUrl: './excel-l1.component.html',
  styleUrls: ['./excel-l1.component.scss']
})
export class ExcelL1Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c5', 'l2')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c5/l2'])
  }
}
