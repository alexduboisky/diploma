import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {DatabaseService} from "../../../../../services/database.service";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-word-l1',
  templateUrl: './word-l1.component.html',
  styleUrls: ['./word-l1.component.scss']
})
export class WordL1Component {
  constructor(private router: Router, private db: DatabaseService, private auth: AuthService) {
  }
  async nextLesson() {
    await this.db.updateCourseToUser(this.auth.User.getValue().id, 'c4', 'p1')
    await this.auth.updateUserData()
    this.router.navigate(['courses/c4/p1'])
  }
}
