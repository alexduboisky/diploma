import { Component } from '@angular/core';
import {DatabaseService} from "../../../../../services/database.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../../../services/auth.service";

@Component({
  selector: 'app-viber-l1',
  templateUrl: './viber-l1.component.html',
  styleUrls: ['./viber-l1.component.scss']
})
export class ViberL1Component {

  constructor(private db: DatabaseService, private router: Router, private auth: AuthService) {
  }
  finishCourse() {
    const courseId = this.router.url.split('/').reverse()[1]
    this.db.finishCourseToUser(this.auth.User.getValue().id, courseId)
    this.router.navigate(['courses'])
  }
}
