import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-windows-l1',
  templateUrl: './windows-l1.component.html',
  styleUrls: ['./windows-l1.component.scss']
})
export class WindowsL1Component {

  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c3', 'l2')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c3/l2'])
  }
}
