import {Component, Input} from '@angular/core';
import {Course} from "../../../../models/courses";
import {DatabaseService} from "../../../../services/database.service";
import {AuthService} from "../../../../services/auth.service";
import {CourseState} from "../../../../services/course.service";

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
  }

  constructor(private db: DatabaseService, public authService: AuthService) {}

  startCourse(id: string) {
    this.db.getCourse(id).subscribe((data: Course[]) => {
      this.db.addCourseToUser(this.authService.User.getValue().id, id, 'l1')
    })
  }
}
