import {Component, Input} from '@angular/core';
import {Course} from "../../../../models/courses";
import {DatabaseService} from "../../../../services/database.service";
import {AuthService} from "../../../../services/auth.service";
import {CourseState} from "../../../../services/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

  @Input() course: Course = {
    id: '',
    title: '',
    description: '',
    image: '',
    name: '',
    lessons: [],
    tests: []
  }

  @Input() activeStep: string = ''
  @Input() status: string = ''

  courseStates = CourseState

  constructor(private db: DatabaseService, public authService: AuthService, private router: Router) {}

  startCourse(id: string) {
    this.db.getCourse(id).subscribe(async (course: Course[]) => {
      await this.db.addCourseToUser(this.authService.User.getValue().id, id)
      const courseEl = course[0]
      this.router.navigate([`courses/${courseEl.id}/l1`])
    })
  }

  continueCourse(id: string) {
    this.db.getCourse(id).subscribe((course: Course[]) => {
      const courseEl = course[0]
      this.router.navigate([`courses/${courseEl.id}/${this.activeStep}`])
    })
  }

  async restartCourse(id: string) {
    await this.db.restartCourseForUser(this.authService.User.getValue().id, id)
    this.startCourse(id)
  }
}
